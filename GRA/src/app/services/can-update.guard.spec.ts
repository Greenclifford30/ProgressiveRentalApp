import { TestBed, async, inject } from '@angular/core/testing';

import { CanUpdateGuard } from './can-update.guard';

describe('CanUpdateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanUpdateGuard]
    });
  });

  it('should ...', inject([CanUpdateGuard], (guard: CanUpdateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
