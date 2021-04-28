import { Component, OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {VideoService} from '../../service/video.service';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {Video} from "../../model/video";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {

  isEmpty = true;
  videoList: any = [];
  file: any;
  progress = 0;
  user: User = new User();
  video: Video = new Video();

  constructor(private service: VideoService,
              private userService: UserService,
              private route: ActivatedRoute,
              private auth: AuthenticationService) {
  }
  ngOnInit(): void {
    this.getUser();
    this.loadAllVideo();
  }
  // tslint:disable-next-line:typedef
  getUser(){
   this.userService.getByEmail(this.auth.getUserLoggedIn()).subscribe(result => {
     this.user = result;
   });
  }

  // tslint:disable-next-line:typedef
  videoSelected(event: any){
    this.file = event.target.files[0];
    console.log('File Updated ' + event.target.files[0].name);
    this.changeBlobPc(this.file);
  }

  // tslint:disable-next-line:typedef
  uploadFile(){
    this.service.uploadVideo(this.video).subscribe(event => {
      if (event !== undefined){
        switch (event.type) {
          case HttpEventType.UploadProgress:
            // @ts-ignore: Object is possibly 'null'.
            this.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }
      this.ngOnInit();
    });
  }
  // tslint:disable-next-line:typedef
  changeBlobPc(file){
    const reader = new FileReader();
    file.arrayBuffer().then((arrayBuffer) => {
      const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
      reader.readAsDataURL(blob);
      this.changeFile(blob).then((base64: string): any => {
          this.video.data = base64.split(',')[1];
          this.video.filename = file.name;
          this.video.fileextension = file.type;
          this.video.user = this.user;
          console.log(this.video.data);
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
  loadAllVideo(){
    this.service.videoList().subscribe(responce => {
      this.videoList = responce;
    });
  }

}
