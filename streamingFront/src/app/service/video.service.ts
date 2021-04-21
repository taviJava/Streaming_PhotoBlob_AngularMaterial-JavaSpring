import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  uploadVideo(fd: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', this.url.concat('video'), fd, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  // tslint:disable-next-line:typedef
  videoList(){
    return this.http.get(this.url.concat('video'));
  }
  // tslint:disable-next-line:typedef
  getVideo(id: number){
    return this.http.get(this.url.concat('video/') + id);
  }
}
