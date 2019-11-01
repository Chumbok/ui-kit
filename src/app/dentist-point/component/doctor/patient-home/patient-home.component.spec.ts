import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientHomeComponent} from './patient-home.component';

describe('PatientHomeComponent', () => {
  let component: PatientHomeComponent;
  let fixture: ComponentFixture<PatientHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
