import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Gallery, ImageSize, ThumbnailsPosition} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {PhotoService} from '../../service/photo.service';
import {base64StringToBlob} from 'blob-util';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-photo-list-light-box',
  templateUrl: './user-photo-list-light-box.component.html',
  styleUrls: ['./user-photo-list-light-box.component.css']
})
export class UserPhotoListLightBoxComponent implements OnInit {
  photos: any[] = [];
  imageObject: Array<object> = [];
  constructor(private userService: UserService,
              public gallery: Gallery,
              public lightbox: Lightbox,
              private photoService: PhotoService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.getPhotos();
  }
  // tslint:disable-next-line:typedef
  public getPhotos(){
    this.photoService.getPhotos().subscribe(event => {
      let files = [];
      files = event;
      for (let file of files){
        const fileReader: FileReader = new FileReader();
        const blob = base64StringToBlob(file.data, file.type);
        fileReader.readAsDataURL(blob);
        fileReader.onload = (_event) => {
          file = fileReader.result;
          this.photos.push(this.sanitizer.bypassSecurityTrustResourceUrl(file));
        };
      }
      this.addImage(this.photos);
    });
  }
  // tslint:disable-next-line:typedef
  addImage(event: any[]){
    for (const file of event){
      const image: any = file;
      const thumbImage: any = file;
      this.imageObject.push({image, thumbImage});

    }
  }

}
