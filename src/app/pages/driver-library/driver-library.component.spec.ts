import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLibraryComponent } from './driver-library.component';

describe('DriverLibraryComponent', () => {
  let component: DriverLibraryComponent;
  let fixture: ComponentFixture<DriverLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
