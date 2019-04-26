import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../service/prescription.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescription: any;
  prescriptionListin: Array<any>;
  patientsId: string;
  itemFrom: number;
  itemTo: number;
  totalElements: number;

  constructor(private prescriptionService: PrescriptionService, private router: Router) {
  }

  searchText;

  ngOnInit() {

    this.prescriptionService.getPrescriptionList(this.patientsId).subscribe(res => {
      this.prescription = res;
      this.prescriptionListin = res['items'];
      this.itemFrom = this.prescription.page + 1;
      this.itemTo = (this.prescription.page + 1) * this.prescription.size;
      this.totalElements = this.prescription.totalElements;
    });
  }

  onPrescriptionView() {
    this.router.navigate(['doctors/prescription-view']);
  }


}
