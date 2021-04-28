import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table-filter-sort-paginator',
  templateUrl: './table-filter-sort-paginator.component.html',
  styleUrls: ['./table-filter-sort-paginator.component.css']
})
export class TableFilterSortPaginatorComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  columns: string[] = ['id', 'email', 'firstName', 'lastName'];
  searchValue = '';
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
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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


  // tslint:disable-next-line:typedef
  applyFilter() {
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
  }
}
