import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {base64StringToBlob} from 'blob-util';
import {Gallery, ImageSize, ThumbnailsPosition} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {PhotoService} from '../../service/photo.service';
import {DomSanitizer} from '@angular/platform-browser';
import {any} from 'codelyzer/util/function';
import {Photo} from '../../model/photo';

@Component({
  selector: 'app-user-photo-list-cards',
  templateUrl: './user-photo-list-cards.component.html',
  styleUrls: ['./user-photo-list-cards.component.css']
})
export class UserPhotoListCardsComponent implements OnInit {
  photos: any[] = [];
  imageObjects: Array<object> = [];
  constructor(private userService: UserService,
              public gallery: Gallery,
              public lightbox: Lightbox,
              private photoService: PhotoService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.getPhotos();
  }
  // tslint:disable-next-line:typedef
  public getPhotos(){
    this.photoService.getPhotos().subscribe(event => {
      let files = [];
      files = event;
      for (let file of files){
        const photoObject: object = {file: any(), photo: Photo};
        const fileReader: FileReader = new FileReader();
        console.log(file);
        photoObject[0] = file;
        const blob = base64StringToBlob(file.data, file.type);
        fileReader.readAsDataURL(blob);
        fileReader.onload = (_event) => {
          file = fileReader.result;
          photoObject[1] = this.sanitizer.bypassSecurityTrustResourceUrl(file);
          this.photos.push(photoObject);
        };
      }
      this.addImage(this.photos, files);
    });
  }
  // tslint:disable-next-line:typedef
  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
  // tslint:disable-next-line:typedef
  addImage(event: any[], photo: any[]){
    for (const file of event){
      const image: any = file;
      this.imageObjects.push({image, photo});

    }
  }

}
