import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToGalery() {
    this.router.navigate(['test9']);
  }
  // tslint:disable-next-line:typedef
  goToVideo(){
    this.router.navigate(['video']);
  }
  // tslint:disable-next-line:typedef
  goToTable(){
    this.router.navigate(['test2']);
  }
  isLoggedIn(): boolean {
    if (!this.auth.isUserLoggedIn()) {
      return false;
    }
    return true;
  }
  // tslint:disable-next-line:typedef
  logOut(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
