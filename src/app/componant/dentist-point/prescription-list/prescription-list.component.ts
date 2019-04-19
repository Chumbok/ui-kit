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
  totalElements: number;
  constructor(private prescriptionService: PrescriptionService, private router: Router) {
  }

  searchText;
  ngOnInit() {

    this.prescriptionService.getPrescriptionList(this.patientsId).subscribe(res => {
      this.prescriptionResp = res;
      this.prescription = res;
    });
  }
  onPrescriptionView() {
    this.router.navigate(['doctors/prescription-view']);
  }


}
