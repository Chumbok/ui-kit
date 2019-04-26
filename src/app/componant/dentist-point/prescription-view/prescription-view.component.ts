import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../service/prescription.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.css']
})
export class PrescriptionViewComponent implements OnInit {

  prescriptions: Array<any> = [];
  prescrip: Array<any> = [];
  prescriptionResp: any;


  constructor(private prescriptionService: PrescriptionService, private router: Router) {
  }

  ngOnInit() {

    this.prescriptionService.getPrescriptionView().subscribe(res => {

      this.prescriptionResp = res;
      res['items'].forEach((medicineList) => {
        this.prescriptions = medicineList.medicines[0];
        this.prescrip.push(this.prescriptions);
        // console.log(this.prescrip);
      });
      this.prescriptions = res['items'];
      // console.log(this.prescriptions);
    });

  }

}
