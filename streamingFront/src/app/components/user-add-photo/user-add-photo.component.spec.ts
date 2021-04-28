import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPhotoComponent } from './user-add-photo.component';

describe('UserAddPhotoComponent', () => {
  let component: UserAddPhotoComponent;
  let fixture: ComponentFixture<UserAddPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
