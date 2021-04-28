import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogConfig, MatDialog} from '@angular/material/dialog';
import {User} from '../../model/user';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-table-final-filter-by-column-sort-pag-operations',
  templateUrl: './table-final-filter-by-column-sort-pag-operations.component.html',
  styleUrls: ['./table-final-filter-by-column-sort-pag-operations.component.css']
})
export class TableFinalFilterByColumnSortPagOperationsComponent implements OnInit {

  displayedColumns = ['id', 'name', 'progress', 'color'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  columns: string[] = ['id', 'email', 'firstName' , 'lastName' , 'Operations'];
  dataSource: MatTableDataSource<User>;
  firstNameFilter = new FormControl('');
  lastNameFilter = new FormControl('');
  emailFilter = new FormControl('');
  idFilter = new FormControl('');

  filterValues: any = {
    firstName: '',
    lastName: '',
    email: '',
    id: ''
  };
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.fieldListener();
  }
  // tslint:disable-next-line:typedef
  getUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.createFilter();
    });
  }
  // tslint:disable-next-line:typedef
  private fieldListener() {
    this.firstNameFilter.valueChanges
      .subscribe(
        firstName => {
          this.filterValues.firstName = firstName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.lastNameFilter.valueChanges
      .subscribe(
        lastName => {
          this.filterValues.lastName = lastName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.emailFilter.valueChanges.subscribe(email => {
      this.filterValues.email = email;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.idFilter.valueChanges.subscribe(id => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  private createFilter(): (user: User, filter: string) => boolean {
    const filterFunction = (user: User, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      return user.firstName.toLowerCase().indexOf(searchTerms.firstName.toLowerCase()) !== -1
        && user.lastName.toLowerCase().indexOf(searchTerms.lastName.toLowerCase()) !== -1
        && user.email.toLowerCase().indexOf(searchTerms.email.toLowerCase()) !== -1
        && JSON.stringify(user.id).indexOf(searchTerms.id) !== -1;
    };
    return filterFunction;
  }

  // tslint:disable-next-line:typedef
  resetFilters(){
    this.dataSource.filter = '';
    this.firstNameFilter.setValue('');
    this.lastNameFilter.setValue('');
    this.idFilter.setValue('');
    this.emailFilter.setValue('');
  }
  // tslint:disable-next-line:typedef
  addUser() {
    this.router.navigate(['users/add']);
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  // tslint:disable-next-line:typedef
  editUser(id: number) {
    this.router.navigate(['users/edit', id]);
  }
  // tslint:disable-next-line:typedef
  addPhotoUser(id: number) {
    this.router.navigate(['users/addPhoto', id]);
  }
  openDialog(code: number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: code
    };
    this.dialog.open(ModalComponent, dialogConfig
    );
    this.dialog.afterAllClosed.subscribe(result => {
      this.ngOnInit();
    });
  }
}
