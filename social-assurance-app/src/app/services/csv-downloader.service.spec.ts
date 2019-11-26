import { TestBed } from '@angular/core/testing';

import { CsvDownloaderService } from './csv-downloader.service';

describe('CsvDownloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvDownloaderService = TestBed.get(CsvDownloaderService);
    expect(service).toBeTruthy();
  });
});
