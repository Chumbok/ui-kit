import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlushMessageComponent } from './flush-message.component';

describe('FlushMessageComponent', () => {
  let component: FlushMessageComponent;
  let fixture: ComponentFixture<FlushMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlushMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlushMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
