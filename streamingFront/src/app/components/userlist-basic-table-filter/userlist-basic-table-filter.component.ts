import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-userlist-basic-table-filter',
  templateUrl: './userlist-basic-table-filter.component.html',
  styleUrls: ['./userlist-basic-table-filter.component.css']
})
export class UserlistBasicTableFilterComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<User> ;
  users: User[] = [];
  columns: string[] = ['id', 'email', 'firstName', 'lastName'];
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  // tslint:disable-next-line:typedef
  getUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.getUsers();
    });
  }

  // tslint:disable-next-line:typedef
  editUser(id: number) {
    this.router.navigate(['edituser', id]);
  }

  // tslint:disable-next-line:typedef
  addUser() {
    this.router.navigate(['adduser']);
  }
}
