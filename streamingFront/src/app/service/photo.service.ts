import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Photo} from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photoUrl: string;
  constructor(private http: HttpClient) {
    this.photoUrl = 'http://localhost:8080/photos';
  }


  public upload(photo: Photo): Observable<HttpEvent<any>> {
    console.log(photo.user.id);
    const req = new HttpRequest('POST', `http://localhost:8080/photos`, photo, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getPhoto(id: string): Observable<any>{
    return this.http.get(`http://localhost:8080/photos/${id}`);
  }

  getPhotos(): Observable<any>{
    return this.http.get(this.photoUrl);
  }
}
