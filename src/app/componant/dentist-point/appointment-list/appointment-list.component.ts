import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentService} from '../../../service/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  prescription: any;
  patientId: string;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  config: any;
  searchText;
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

      this.router.navigate(['doctors/appointment-list'], {queryParams: {page: newPage}});
    this.appointmentService.getAppointmentListByDoctorId().subscribe(res => {
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
      });

  }

  ngOnInit() {
    this.pageChange(1);
    this.appointmentService.getAppointmentListByDoctorId().subscribe(res => {
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
    });

  }

  onAppointmentEdit(prescriptionId) {
   // this.router.navigate(['doctors/'+'prescription/' + prescriptionId + '/prescription-view']);
  }
  onAppointmentDelete(appointmentId) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe(res => {
      //    console.log(res['items']);
    });
  }


}
