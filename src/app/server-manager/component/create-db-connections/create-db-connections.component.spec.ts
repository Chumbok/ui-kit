import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDbConnectionsComponent } from './create-db-connections.component';

describe('CreateDbConnectionsComponent', () => {
  let component: CreateDbConnectionsComponent;
  let fixture: ComponentFixture<CreateDbConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDbConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDbConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
