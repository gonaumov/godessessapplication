import { TestBed } from '@angular/core/testing';

import { GoddessService } from './goddess.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoddessService', () => {
  let service: GoddessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GoddessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
