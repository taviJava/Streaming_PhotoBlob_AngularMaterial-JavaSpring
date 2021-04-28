import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user = new User();
  id: number;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUser();
    this.assignValuesToUser();
  }
// tslint:disable-next-line:typedef
  updateUser(){
    this.userService.update(this.user).subscribe(result => {
      this.router.navigate(['test2']);
    });
  }
  // tslint:disable-next-line:typedef
  getUser(){
    this.userService.getById(this.id).subscribe(result => {
      this.user = new User();
      this.user = result;
      this.email.setValue(this.user.email);
      this.firstName.setValue(this.user.firstName);
      this.lastName.setValue(this.user.lastName);
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
