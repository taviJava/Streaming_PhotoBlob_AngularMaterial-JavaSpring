import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFinalFilterByColumnSortPagOperationsComponent } from './table-final-filter-by-column-sort-pag-operations.component';

describe('TableFinalFilterByColumnSortPagOperationsComponent', () => {
  let component: TableFinalFilterByColumnSortPagOperationsComponent;
  let fixture: ComponentFixture<TableFinalFilterByColumnSortPagOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFinalFilterByColumnSortPagOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFinalFilterByColumnSortPagOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
