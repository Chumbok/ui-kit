import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {AppointmentService} from "../../../service/appointment.service";


@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html'
})
export class TemplateSidenavComponent {

  patientId: string;

  constructor(private modal: NgbModal, private appointmentService: AppointmentService, private router: Router) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentList().subscribe(res => {
      res['items'].forEach((appointment) => {
        this.patientId = appointment.attendees[0].id;
      });

    });
  }

  createPrescription(id: string): void {
    this.patientId;
    this.router.navigate(['patients/' + this.patientId + '/create-prescription']);
  }

  prescriptionList() {
    this.patientId;
    this.router.navigate(['patients/' + this.patientId + '/prescription-list']);
  }
}

