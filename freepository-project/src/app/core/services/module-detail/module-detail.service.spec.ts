import { TestBed } from '@angular/core/testing';

import { ModuleDetailService } from './module-detail/module-detail.service';

describe('ModuleDetailService', () => {
  let service: ModuleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
