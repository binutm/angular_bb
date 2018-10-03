import { TestBed, inject } from '@angular/core/testing';

import { ForgetPasswordRequestService } from './forget-password-request.service';

describe('ForgetPasswordRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPasswordRequestService]
    });
  });

  it('should be created', inject([ForgetPasswordRequestService], (service: ForgetPasswordRequestService) => {
    expect(service).toBeTruthy();
  }));
});
