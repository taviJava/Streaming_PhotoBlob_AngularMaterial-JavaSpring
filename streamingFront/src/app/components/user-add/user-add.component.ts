import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();
  hide = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.assignValuesToUser();
  }
// tslint:disable-next-line:typedef
  addUser(){
    this.userService.save(this.user).subscribe(result => {
      this.router.navigate(['test2']);
    });
  }
  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // tslint:disable-next-line:typedef
  getErrorMess(){
    if (this.firstName.hasError('required')){
      return 'the field must not be empty';
    }
  }
  // tslint:disable-next-line:typedef
  getErrLastName(){
    if (this.lastName.hasError('required')){
      return 'the field must not be empty';
    }
  }
  // tslint:disable-next-line:typedef
  getErrPassword() {
    if (this.password.hasError('required')) {
      return 'the field must not be empty';
    }
  }
  // tslint:disable-next-line:typedef
  assignValuesToUser(){
    this.firstName.valueChanges.subscribe( firstname => {
      this.user.firstName = firstname as string;
    });
    this.lastName.valueChanges.subscribe(lastName => {
      this.user.lastName = lastName as string;
    });
    this.email.valueChanges.subscribe(email => {
      this.user.email = email as string;
    });
    this.password.valueChanges.subscribe( password => {
      this.user.password = password as string;
    });
  }
  blockSubmit(): boolean {
    if (this.email.hasError('required') ){
      return true;
    }
    if (this.email.hasError('email')){
      return true;
    }
    if (this.lastName.hasError('required')){
      return true;
    }
    if (this.firstName.hasError('required')){
      return true;
    }
    return false;
  }
  // tslint:disable-next-line:typedef
  backToUsers(){
    this.router.navigate(['test2']);
  }

}
