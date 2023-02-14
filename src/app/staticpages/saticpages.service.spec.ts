import { TestBed } from '@angular/core/testing';

import { SaticpagesService } from './saticpages.service';

describe('SaticpagesService', () => {
  let service: SaticpagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaticpagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
