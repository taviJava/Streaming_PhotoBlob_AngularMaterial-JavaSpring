import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photoUrl: string;
  constructor(private http: HttpClient) {
    this.photoUrl = 'http://localhost:8080/photos';
  }


  public upload(formData: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('PUT', `http://localhost:8080/photos`, formData, {
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
