import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../service/prescription.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.css']
})
export class PrescriptionViewComponent implements OnInit {

  prescriptions: Array<any>;
  prescriptionId: string;
  prescriptionResp: any;
  itemFrom: number;
  itemTo: number;
  totalElements: number;

  constructor(private prescriptionService: PrescriptionService, private router: Router) {
  }

  ngOnInit() {
    this.prescriptionService.getPrescriptionView(this.prescriptionId).subscribe(res => {
      this.prescriptionResp = res;
      this.prescriptions = res['items'];
      this.itemFrom = this.prescriptionResp.page + 1;
      this.itemTo = (this.prescriptionResp.page + 1) * this.prescriptionResp.size;
      this.totalElements = this.prescriptionResp.totalElements;
    });

  }


}
