import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../service/prescription.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescription: Array<any>;
  patientsId: string;
  prescriptionResp: any;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  prescriptions: Array<any> = [];
  prescrip: Array<any> = [];

  constructor(private prescriptionService: PrescriptionService, private router: Router) {
  }


  ngOnInit() {

    this.prescriptionService.getPrescriptionList(this.patientsId).subscribe(res => {
      this.prescriptionResp = res;
      this.prescription = res['items'];
      this.itemFrom = this.prescriptionResp.page + 1;
      this.itemTo = (this.prescriptionResp.page + 1) * this.prescriptionResp.size;
      this.totalElements = this.prescriptionResp.totalElements;
    });

  }

  onPrescriptionView() {

    this.router.navigate(['doctors/prescription-view']);

  }


}
