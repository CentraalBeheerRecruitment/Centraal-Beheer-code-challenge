import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceInputComponent } from './licence-input.component';

describe('LicenceInputComponent', () => {
  let component: LicenceInputComponent;
  let fixture: ComponentFixture<LicenceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
