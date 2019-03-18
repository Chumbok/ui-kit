import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrescriptionViewComponent} from './prescription-view.component';

describe('PrescriptionViewComponent', () => {
  let component: PrescriptionViewComponent;
  let fixture: ComponentFixture<PrescriptionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
