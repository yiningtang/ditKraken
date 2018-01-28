import { TestBed, inject } from '@angular/core/testing';

import { BranchListService } from './branch-list.service';

describe('BranchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchListService]
    });
  });

  it('should be created', inject([BranchListService], (service: BranchListService) => {
    expect(service).toBeTruthy();
  }));
});
