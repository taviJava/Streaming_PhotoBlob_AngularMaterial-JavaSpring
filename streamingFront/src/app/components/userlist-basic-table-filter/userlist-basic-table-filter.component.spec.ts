import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistBasicTableFilterComponent } from './userlist-basic-table-filter.component';

describe('UserlistBasicTableFilterComponent', () => {
  let component: UserlistBasicTableFilterComponent;
  let fixture: ComponentFixture<UserlistBasicTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistBasicTableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistBasicTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
