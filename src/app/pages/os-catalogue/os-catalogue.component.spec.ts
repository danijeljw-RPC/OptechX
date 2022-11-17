import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCatalogueComponent } from './os-catalogue.component';

describe('OsCatalogueComponent', () => {
  let component: OsCatalogueComponent;
  let fixture: ComponentFixture<OsCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
