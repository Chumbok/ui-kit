import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDbBackupJobsComponent } from './create-db-backup-jobs.component';

describe('CreateDbBackupJobsComponent', () => {
  let component: CreateDbBackupJobsComponent;
  let fixture: ComponentFixture<CreateDbBackupJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDbBackupJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDbBackupJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
