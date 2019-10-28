import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbBackupJobListComponent } from './db-backup-job-list.component';

describe('DbBackupJobListComponent', () => {
  let component: DbBackupJobListComponent;
  let fixture: ComponentFixture<DbBackupJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbBackupJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbBackupJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
