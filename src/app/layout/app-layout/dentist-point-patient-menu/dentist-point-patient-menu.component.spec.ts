import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistPointPatientMenuComponent } from './dentist-point-patient-menu.component';

describe('DentistPointPatientMenuComponent', () => {
  let component: DentistPointPatientMenuComponent;
  let fixture: ComponentFixture<DentistPointPatientMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistPointPatientMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistPointPatientMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
