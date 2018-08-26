import { TestBed, inject } from '@angular/core/testing';

import { HttpCitiesService } from './http-cities.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpCitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [HttpCitiesService]
    });
  });

  it('should be created', inject([HttpCitiesService], (service: HttpCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
