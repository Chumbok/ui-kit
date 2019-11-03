import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../services/appointment.service';

@Component({
  selector: 'patient-app-template-sidenav',
  templateUrl: './patient-dashboard-sidenav.component.html'
})
export class PatientDashboardSidenavComponent {

  constructor(private modal: NgbModal, private appointmentService: AppointmentService, private router: Router) {
  }
}

