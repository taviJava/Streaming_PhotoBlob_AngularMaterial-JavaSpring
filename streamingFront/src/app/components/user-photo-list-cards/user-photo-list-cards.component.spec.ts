import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoListCardsComponent } from './user-photo-list-cards.component';

describe('UserPhotoListCardsComponent', () => {
  let component: UserPhotoListCardsComponent;
  let fixture: ComponentFixture<UserPhotoListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPhotoListCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
