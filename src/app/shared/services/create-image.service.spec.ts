import { TestBed } from '@angular/core/testing';

import { CreateImageService } from './create-image.service';

describe('CreateImageService', () => {
  let service: CreateImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
