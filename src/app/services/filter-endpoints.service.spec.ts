import { TestBed, inject } from '@angular/core/testing';

import { FilterEndpointsService } from './filter-endpoints.service';

describe('FilterEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterEndpointsService]
    });
  });

  it('should be created', inject([FilterEndpointsService], (service: FilterEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
