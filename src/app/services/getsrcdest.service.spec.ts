import { TestBed, inject } from '@angular/core/testing';

import { GetsrcdestService } from './getsrcdest.service';

describe('GetsrcdestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetsrcdestService]
    });
  });

  it('should be created', inject([GetsrcdestService], (service: GetsrcdestService) => {
    expect(service).toBeTruthy();
  }));
});
