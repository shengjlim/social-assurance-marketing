import { TestBed } from '@angular/core/testing';

import { FormInfoService } from './form-info.service';

describe('FormInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormInfoService = TestBed.get(FormInfoService);
    expect(service).toBeTruthy();
  });
});
