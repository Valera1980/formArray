import { TestBed, inject } from '@angular/core/testing';

import { CitiesInterceptorService } from './cities-interceptor.service';

describe('CitiesInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesInterceptorService]
    });
  });

  it('should be created', inject([CitiesInterceptorService], (service: CitiesInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
