import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Gallery, ImageSize, ThumbnailsPosition} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {PhotoService} from '../../service/photo.service';
import {base64StringToBlob} from 'blob-util';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user-photo-galery-slide',
  templateUrl: './user-photo-galery-slide.component.html',
  styleUrls: ['./user-photo-galery-slide.component.css']
})
export class UserPhotoGalerySlideComponent implements OnInit {
  photos: any[] = [];
  imageObject: Array<object> = [];
  constructor(private userService: UserService,
              public gallery: Gallery,
              public lightbox: Lightbox,
              private photoService: PhotoService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // // Get a lightbox gallery ref
    // const lightboxRef = this.gallery.ref('lightbox');
    //
    // // Add custom gallery config to the lightbox (optional)
    // lightboxRef.setConfig({
    //   imageSize: ImageSize.Cover,
    //   thumbPosition: ThumbnailsPosition.Top,
    // });
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
          this.addImage(file);
        };
      }
    });
  }
  // tslint:disable-next-line:typedef
  addImage(file: any){
    const files: any[] = [];
    files.push(file);
    for (const fl of files){
      const image: any = fl;
      const thumbImage: any = fl;
      this.imageObject.push({image, thumbImage});

    }
  }

}
