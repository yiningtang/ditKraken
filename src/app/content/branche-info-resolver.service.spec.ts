import { TestBed, inject } from '@angular/core/testing';

import { BrancheInfoResolver } from './branche-info-resolver.service';

describe('BrancheInfoResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrancheInfoResolver]
    });
  });

  it('should be created', inject([BrancheInfoResolver], (service: BrancheInfoResolver) => {
    expect(service).toBeTruthy();
  }));
});
