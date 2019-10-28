import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileBackupJobsComponent } from './create-file-backup-jobs.component';

describe('CreateFileBackupJobsComponent', () => {
  let component: CreateFileBackupJobsComponent;
  let fixture: ComponentFixture<CreateFileBackupJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFileBackupJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFileBackupJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
