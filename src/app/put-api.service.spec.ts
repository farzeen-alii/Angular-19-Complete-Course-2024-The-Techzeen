import { TestBed } from '@angular/core/testing';

import { PutApiService } from './put-api.service';

describe('PutApiService', () => {
  let service: PutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
