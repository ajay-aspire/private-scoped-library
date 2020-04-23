import { TestBed } from '@angular/core/testing';

import { PrivateLibSimpleService } from './private-lib-simple.service';

describe('PrivateLibSimpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateLibSimpleService = TestBed.get(PrivateLibSimpleService);
    expect(service).toBeTruthy();
  });
});
