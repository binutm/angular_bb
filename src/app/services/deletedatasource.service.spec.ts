import { TestBed, inject } from '@angular/core/testing';

import { DeletedatasourceService } from './deletedatasource.service';

describe('DeletedatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletedatasourceService]
    });
  });

  it('should be created', inject([DeletedatasourceService], (service: DeletedatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
