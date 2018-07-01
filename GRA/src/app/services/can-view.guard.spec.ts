import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewGuard } from './can-view.guard';

describe('CanViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanViewGuard]
    });
  });

  it('should ...', inject([CanViewGuard], (guard: CanViewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
