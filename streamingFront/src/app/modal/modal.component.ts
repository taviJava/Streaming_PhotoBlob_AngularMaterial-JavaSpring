import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  id: number;
  constructor(private userService: UserService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.id = data.id;
  }
  // tslint:disable-next-line:typedef
  deleteUser() {
    console.log('Id ul este:' + this.id);
    this.userService.delete(this.id).subscribe(data => {
      this.router.navigate(['test2']);
    });
  }

}
