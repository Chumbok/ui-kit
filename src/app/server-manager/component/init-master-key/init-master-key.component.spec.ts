import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitMasterKeyComponent } from './init-master-key.component';

describe('InitMasterKeyComponent', () => {
  let component: InitMasterKeyComponent;
  let fixture: ComponentFixture<InitMasterKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitMasterKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitMasterKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
