import { TestBed, async, inject } from '@angular/core/testing';

import { DdlGuard } from './ddl.guard';

describe('DdlGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DdlGuard]
    });
  });

  it('should ...', inject([DdlGuard], (guard: DdlGuard) => {
    expect(guard).toBeTruthy();
  }));
});
