import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientViewMedicineComponent} from './patient-view-medicine.component';

describe('PatientViewMedicineComponent', () => {
  let component: PatientViewMedicineComponent;
  let fixture: ComponentFixture<PatientViewMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientViewMedicineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
