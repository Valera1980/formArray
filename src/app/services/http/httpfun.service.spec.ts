import { TestBed, inject } from '@angular/core/testing';

import { HttpfunService } from './httpfun.service';

describe('HttpfunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpfunService]
    });
  });

  it('should be created', inject([HttpfunService], (service: HttpfunService) => {
    expect(service).toBeTruthy();
  }));
});
