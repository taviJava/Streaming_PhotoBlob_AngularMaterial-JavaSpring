import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../../service/photo.service';
import {base64StringToBlob} from 'blob-util';
import {Photo} from '../../model/photo';
import {File} from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
import {basename} from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-user-add-photo',
  templateUrl: './user-add-photo.component.html',
  styleUrls: ['./user-add-photo.component.css']
})
export class UserAddPhotoComponent implements OnInit {
  photo: Photo = new Photo();
  user: User = new User();
  id: number;
  progress = 0;
  message = '';
  selectedFiles: FileList;
  // preview photo
  fileData: FormDataEntryValue ;
  previewUrl: any = null;
  uploadedFilePath: string | null;
  // photo Angular Material Test
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  files: any[] = [];
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private photoService: PhotoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUser(this.id);
  }
  // tslint:disable-next-line:typedef
  getUser(id: number){
    this.userService.getById(id).subscribe(user => {
      this.user = new User();
      this.user = user;
    });
  }

  // tslint:disable-next-line:typedef
  changeBlobPc(file){
    const reader = new FileReader();
    file.arrayBuffer().then((arrayBuffer) => {
      const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
      reader.readAsDataURL(blob);
      this.changeFile(blob).then((base64: string): any => {
        this.photo.data = base64.split(',')[1];
        this.photo.name = file.name;
        this.photo.type = file.type;
        this.photo.user = this.user;
        this.addToDataBase();
      }
      );
    });
  }
  // tslint:disable-next-line:typedef
  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // tslint:disable-next-line:typedef
  onFileSelect(file: any) {
    this.changeBlobPc(file.data);
  }
  // tslint:disable-next-line:typedef
  addToDataBase(){
    this.photoService.upload(this.photo).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore: Object is possibly 'null'
          this.progress = Math.round(event.loaded * 100 / event.total);
        }
      }, (err) => console.log(err)
    );
  }
  // tslint:disable-next-line:typedef
  private upload2() {
    this.fileInput.nativeElement.value = '';
    this.files.forEach(file => {
      this.onFileSelect(file);
    });
  }
  // tslint:disable-next-line:typedef
  onClick() {
    const fileInput = this.fileInput.nativeElement;
    fileInput .onchange = () => {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < fileInput .files.length; index++)
      {
        const file = fileInput .files[index];
        // @ts-ignore
        this.files.push({ data: file, inProgress: false, progress: 0});
      }
      this.upload2();
    };
    fileInput.click();
  }
}

