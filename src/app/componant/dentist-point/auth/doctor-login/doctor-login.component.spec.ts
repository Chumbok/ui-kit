import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoctorLoginComponent} from './doctor-login.component';

describe('DoctorLoginComponent', () => {
  let component: DoctorLoginComponent;
  let fixture: ComponentFixture<DoctorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
