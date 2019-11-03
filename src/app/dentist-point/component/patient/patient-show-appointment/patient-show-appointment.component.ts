import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-patient-show-appointment',
  templateUrl: './patient-show-appointment.component.html',
  styleUrls: ['./patient-show-appointment.component.css']
})

export class PatientShowAppointmentComponent implements OnInit {

  searchText;
  config: any;
  prescription: any;
  patientId: string;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  patientName: string;
  appointmentList: Array<any> = [];

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
  }

  pageChange(newPage: number) {

    this.router.navigate(['dentist-point/patient/show-appointment-list'], {queryParams: {page: newPage}});
    this.appointmentService.getAppointmentListByLoggedInPatient().subscribe(res => {
      this.appointmentList = [];
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
    });
  }

  ngOnInit() {

    this.pageChange(1);
    this.appointmentService.getAppointmentListByLoggedInPatient().subscribe(res => {
      this.appointmentList = [];
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
    });

  }

  onAppointmentEdit(prescriptionId) {

  }

  onAppointmentDelete(appointmentId) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe(res => {
      //    console.log(res['items']);
    });
  }


}
