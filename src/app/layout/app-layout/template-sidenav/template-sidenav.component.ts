import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../service/appointment.service';


@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html'
})
export class TemplateSidenavComponent {

  constructor(private modal: NgbModal, private appointmentService: AppointmentService, private router: Router) {
  }
}

