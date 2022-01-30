import { TestBed } from '@angular/core/testing';

import { RollbardService } from './rollbard.service';

describe('RollbardService', () => {
  let service: RollbardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollbardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
