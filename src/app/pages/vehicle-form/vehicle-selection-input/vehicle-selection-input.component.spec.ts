import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSelectionInputComponent } from './vehicle-selection-input.component';

describe('VehicleSelectionInputComponent', () => {
  let component: VehicleSelectionInputComponent;
  let fixture: ComponentFixture<VehicleSelectionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSelectionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSelectionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
