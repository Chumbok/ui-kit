import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSshConnectionsComponent } from './create-ssh-connections.component';

describe('CreateSshConnectionsComponent', () => {
  let component: CreateSshConnectionsComponent;
  let fixture: ComponentFixture<CreateSshConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSshConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSshConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
