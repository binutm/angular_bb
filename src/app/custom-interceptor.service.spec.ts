import { TestBed, inject } from '@angular/core/testing';

import { CustomInterceptor } from './custom-interceptor.service';

describe('CustomInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomInterceptor]
    });
  });

  it('should be created', inject([CustomInterceptor], (service: CustomInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
