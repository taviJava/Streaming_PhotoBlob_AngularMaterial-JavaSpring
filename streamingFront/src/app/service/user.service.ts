import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {Observable, Subscription} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';

  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // tslint:disable-next-line:typedef
  public save(user: User) {
    console.log(user.firstName);
    return this.http.post<User>(this.usersUrl, user);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.usersUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public update(user: User) {
    return this.http.put<User>(this.usersUrl, user);
  }

  // tslint:disable-next-line:typedef
  public getById(id: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/${id}`);
  }
  public getByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:8080/user/${email}`);
  }
}
