import { TestBed } from '@angular/core/testing';

import { IonicauthService } from './ionicauth.service';

describe('IonicauthService', () => {
  let service: IonicauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
