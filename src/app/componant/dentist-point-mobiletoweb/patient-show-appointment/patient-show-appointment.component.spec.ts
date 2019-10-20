import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientShowAppointmentComponent} from './patient-show-appointment.component';

describe('PatientShowAppointmentComponent', () => {
  let component: PatientShowAppointmentComponent;
  let fixture: ComponentFixture<PatientShowAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientShowAppointmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientShowAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
