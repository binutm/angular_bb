import { TestBed, inject } from '@angular/core/testing';

import { FordownloadService } from './fordownload.service';

describe('FordownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FordownloadService]
    });
  });

  it('should be created', inject([FordownloadService], (service: FordownloadService) => {
    expect(service).toBeTruthy();
  }));
});
