import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBackupJobListComponent } from './file-backup-job-list.component';

describe('FileBackupJobListComponent', () => {
  let component: FileBackupJobListComponent;
  let fixture: ComponentFixture<FileBackupJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBackupJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBackupJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
