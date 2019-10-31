import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoctorLogoutComponent} from './doctor-logout.component';

describe('DoctorLogoutComponent', () => {
  let component: DoctorLogoutComponent;
  let fixture: ComponentFixture<DoctorLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorLogoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
