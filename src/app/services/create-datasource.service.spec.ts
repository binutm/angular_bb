import { TestBed, inject } from '@angular/core/testing';

import { CreateDatasourceService } from './create-datasource.service';

describe('CreateDatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDatasourceService]
    });
  });

  it('should be created', inject([CreateDatasourceService], (service: CreateDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
