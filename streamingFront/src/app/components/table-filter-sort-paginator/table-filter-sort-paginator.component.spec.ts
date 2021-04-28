import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterSortPaginatorComponent } from './table-filter-sort-paginator.component';

describe('TableFilterSortPaginatorComponent', () => {
  let component: TableFilterSortPaginatorComponent;
  let fixture: ComponentFixture<TableFilterSortPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterSortPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterSortPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
