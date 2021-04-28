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
    this.router.navigate(['users/video']);
  }
  // tslint:disable-next-line:typedef
  goToUsersBasic(){
    this.router.navigate(['users/basic/table']);
  }
  // tslint:disable-next-line:typedef
  goToUsersFilter(){
    this.router.navigate(['users/table/filter/sort/paginator']);
  }
  // tslint:disable-next-line:typedef
  goToUsersFinal(){
    this.router.navigate(['users/table/filterByColumn/sort/paginator/final']);
  }
  // tslint:disable-next-line:typedef
  goToPhotoCard(){
    this.router.navigate(['users/photoCards']);
  }
  // tslint:disable-next-line:typedef
  goToPhotoSlide(){
    this.router.navigate(['users/photoSlide']);
  }
  // tslint:disable-next-line:typedef
  goToPhotoSlideLight(){
    this.router.navigate(['users/photoSlideLightBox']);
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
