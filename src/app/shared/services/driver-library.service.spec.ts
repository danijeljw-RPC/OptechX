import { TestBed } from '@angular/core/testing';

import { DriverLibraryService } from './driver-library.service';

describe('DriverLibraryService', () => {
  let service: DriverLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
