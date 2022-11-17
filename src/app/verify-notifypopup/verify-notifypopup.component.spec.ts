import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNotifypopupComponent } from './verify-notifypopup.component';

describe('VerifyNotifypopupComponent', () => {
  let component: VerifyNotifypopupComponent;
  let fixture: ComponentFixture<VerifyNotifypopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyNotifypopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNotifypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
