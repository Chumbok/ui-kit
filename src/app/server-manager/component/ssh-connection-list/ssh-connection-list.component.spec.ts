import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshConnectionListComponent } from './ssh-connection-list.component';

describe('SshConnectionListComponent', () => {
  let component: SshConnectionListComponent;
  let fixture: ComponentFixture<SshConnectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshConnectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshConnectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
