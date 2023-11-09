import { TestBed } from '@angular/core/testing';

import { AzadService } from './azad.service';

describe('AzadService', () => {
  let service: AzadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
