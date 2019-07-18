import { TestBed } from '@angular/core/testing';

import { RoutineDetailService } from './routine-detail.service';

describe('RoutineDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutineDetailService = TestBed.get(RoutineDetailService);
    expect(service).toBeTruthy();
  });
});
