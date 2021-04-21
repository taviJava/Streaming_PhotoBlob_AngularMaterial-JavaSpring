import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isUserLoggedIn() && req.url.indexOf('login') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.auth.getToken()}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
