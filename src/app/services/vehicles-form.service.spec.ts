import { TestBed } from '@angular/core/testing';

import { VehiclesFormService } from './vehicles-form.service';

describe('VehiclesService', () => {
  let service: VehiclesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
