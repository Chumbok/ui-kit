import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientHomeLayoutComponent} from './patient-home-layout.component';

describe('PatientHomeLayoutComponent', () => {
  let component: PatientHomeLayoutComponent;
  let fixture: ComponentFixture<PatientHomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientHomeLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
