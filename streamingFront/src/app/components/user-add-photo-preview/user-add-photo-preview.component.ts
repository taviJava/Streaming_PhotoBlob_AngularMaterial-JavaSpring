import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {Ng2ImgMaxService} from 'ng2-img-max';
import {UserService} from '../../service/user.service';
import {PhotoService} from '../../service/photo.service';
import {Photo} from '../../model/photo';

@Component({
  selector: 'app-user-add-photo-preview',
  templateUrl: './user-add-photo-preview.component.html',
  styleUrls: ['./user-add-photo-preview.component.css']
})
export class UserAddPhotoPreviewComponent implements OnInit {
  selectedFile: null;
  progress = 0;
  previewUrl: any = null;
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  constructor(private userService: UserService,
              private ng2ImgMax: Ng2ImgMaxService,
              private photoService: PhotoService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onChange(event: any){
    this.selectedFile = event.target.files[0];
    this.preview();
  }
  // tslint:disable-next-line:typedef
  preview() {
    // @ts-ignore
    const mimeType = this.selectedFile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(this.selectedFile);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
// tslint:disable-next-line:typedef
  onFileSelect() {
    // @ts-ignore
    this.ng2ImgMax.resizeImage(this.selectedFile, 500, 600).subscribe(
      result => {
        const formData = new FormData();
        // @ts-ignore: Object is possibly 'null'
        formData.append('photo', result);
        this.photoService.upload(new Photo()).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              // @ts-ignore: Object is possibly 'null'
              this.progress = Math.round(event.loaded * 100 / event.total);
            }
            console.log(event);
          }, (err) => console.log(err)
        );
      });
  }


}
