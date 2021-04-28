import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  uploadVideo(video: Video): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', this.url.concat('video'), video, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  // tslint:disable-next-line:typedef
  videoList(){
    return this.http.get('http://localhost:8080/video');
  }
  // tslint:disable-next-line:typedef
  getVideo(id: number){
    return this.http.get(this.url.concat('video/') + id);
  }
}
