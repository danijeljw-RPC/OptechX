import { TestBed } from '@angular/core/testing';

import { OsCatalogueService } from './os-catalogue.service';

describe('OsCatalogueService', () => {
  let service: OsCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
