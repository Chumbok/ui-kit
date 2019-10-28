import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbConnectionListComponent } from './db-connection-list.component';

describe('DbConnectionListComponent', () => {
  let component: DbConnectionListComponent;
  let fixture: ComponentFixture<DbConnectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbConnectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbConnectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
