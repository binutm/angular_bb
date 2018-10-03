import { TestBed, inject } from '@angular/core/testing';

import { IsvalidService } from './isvalid.service';

describe('IsvalidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsvalidService]
    });
  });

  it('should be created', inject([IsvalidService], (service: IsvalidService) => {
    expect(service).toBeTruthy();
  }));
});
