import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoGalerySlideComponent } from './user-photo-galery-slide.component';

describe('UserPhotoGalerySlideComponent', () => {
  let component: UserPhotoGalerySlideComponent;
  let fixture: ComponentFixture<UserPhotoGalerySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPhotoGalerySlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoGalerySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
