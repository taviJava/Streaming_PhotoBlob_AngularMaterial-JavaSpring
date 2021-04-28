import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPhotoDragDropComponentComponent } from './user-add-photo-drag-drop-component.component';

describe('UserAddPhotoDragDropComponentComponent', () => {
  let component: UserAddPhotoDragDropComponentComponent;
  let fixture: ComponentFixture<UserAddPhotoDragDropComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddPhotoDragDropComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddPhotoDragDropComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
