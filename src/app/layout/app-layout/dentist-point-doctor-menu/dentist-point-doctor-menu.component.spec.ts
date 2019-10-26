import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistPointDoctorMenuComponent } from './dentist-point-doctor-menu.component';

describe('DentistPointDoctorMenuComponent', () => {
  let component: DentistPointDoctorMenuComponent;
  let fixture: ComponentFixture<DentistPointDoctorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistPointDoctorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistPointDoctorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
