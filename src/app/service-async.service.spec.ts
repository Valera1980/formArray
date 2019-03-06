import { TestBed } from '@angular/core/testing';

import { ServiceAsyncService } from './service-async.service';

describe('ServiceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAsyncService = TestBed.get(ServiceAsyncService);
    expect(service).toBeTruthy();
  });
});
