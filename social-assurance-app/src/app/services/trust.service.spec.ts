import { TestBed } from '@angular/core/testing';

import { TrustService } from './trust.service';

describe('TrustService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrustService = TestBed.get(TrustService);
    expect(service).toBeTruthy();
  });
});
