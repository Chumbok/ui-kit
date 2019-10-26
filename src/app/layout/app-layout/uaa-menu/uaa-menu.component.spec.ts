import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaaMenuComponent } from './uaa-menu.component';

describe('UaaMenuComponent', () => {
  let component: UaaMenuComponent;
  let fixture: ComponentFixture<UaaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
