import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  user: User;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private fb: FormBuilder, ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.user = new User();
  }

  // tslint:disable-next-line:typedef
  handleLogin() {
    this.user.email = this.form.get('username')?.value;
    this.user.password = this.form.get('password')?.value;
    console.log(this.user);
    this.authenticationService.authentication(this.user).subscribe(result => {
      this.authenticationService.TOKEN_SESSION_ATTRIBUTE_NAME = result.token;
      this.authenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME = this.user.email;
      this.authenticationService.registerSuccessfulLogin(this.user.email);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.goToHomePage();
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }


  // tslint:disable-next-line:typedef
  goToRegister() {
    this.router.navigate(['register']);
  }

  // tslint:disable-next-line:typedef
  goToHomePage() {
    this.router.navigate(['users/basic/table']);
  }
}
