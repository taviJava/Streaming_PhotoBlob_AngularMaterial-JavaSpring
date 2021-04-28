import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPhotoPreviewComponent } from './user-add-photo-preview.component';

describe('UserAddPhotoPreviewComponent', () => {
  let component: UserAddPhotoPreviewComponent;
  let fixture: ComponentFixture<UserAddPhotoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddPhotoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddPhotoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
