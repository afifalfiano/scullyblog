import { TestBed } from '@angular/core/testing';

import { SocialtagsService } from './socialtags.service';

describe('SocialtagsService', () => {
  let service: SocialtagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialtagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
