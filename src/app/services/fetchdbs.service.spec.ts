import { TestBed, inject } from '@angular/core/testing';

import { FetchdbsService } from './fetchdbs.service';

describe('FetchdbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchdbsService]
    });
  });

  it('should be created', inject([FetchdbsService], (service: FetchdbsService) => {
    expect(service).toBeTruthy();
  }));
});
