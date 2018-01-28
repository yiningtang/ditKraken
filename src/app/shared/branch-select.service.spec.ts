import { TestBed, inject } from '@angular/core/testing';

import { BranchSelectService } from './branch-select.service';

describe('BranchSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchSelectService]
    });
  });

  it('should be created', inject([BranchSelectService], (service: BranchSelectService) => {
    expect(service).toBeTruthy();
  }));
});
