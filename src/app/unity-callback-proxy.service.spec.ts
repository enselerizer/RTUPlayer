import { TestBed } from '@angular/core/testing';

import { UnityCallbackProxyService } from './unity-callback-proxy.service';

describe('UnityCallbackProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnityCallbackProxyService = TestBed.get(UnityCallbackProxyService);
    expect(service).toBeTruthy();
  });
});
