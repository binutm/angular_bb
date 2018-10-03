import { TestBed, inject } from '@angular/core/testing';

import { GetconnectionidsService } from './getconnectionids.service';

describe('GetconnectionidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetconnectionidsService]
    });
  });

  it('should be created', inject([GetconnectionidsService], (service: GetconnectionidsService) => {
    expect(service).toBeTruthy();
  }));
});
