import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientShowPrescriptionComponent} from './patient-show-prescription.component';

describe('PatientShowPrescriptionComponent', () => {
  let component: PatientShowPrescriptionComponent;
  let fixture: ComponentFixture<PatientShowPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientShowPrescriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientShowPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
