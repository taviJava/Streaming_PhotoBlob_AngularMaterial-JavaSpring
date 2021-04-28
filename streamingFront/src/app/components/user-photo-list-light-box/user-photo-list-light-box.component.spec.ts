import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoListLightBoxComponent } from './user-photo-list-light-box.component';

describe('UserPhotoListLightBoxComponent', () => {
  let component: UserPhotoListLightBoxComponent;
  let fixture: ComponentFixture<UserPhotoListLightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPhotoListLightBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoListLightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
