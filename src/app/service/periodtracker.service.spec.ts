import { TestBed } from '@angular/core/testing';

import { PeriodtrackerService } from './periodtracker.service';

describe('PeriodtrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodtrackerService = TestBed.get(PeriodtrackerService);
    expect(service).toBeTruthy();
  });
});
