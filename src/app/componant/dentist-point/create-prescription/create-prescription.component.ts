import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  public reportBox = true;
  public prescriptionBox = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  patientCreate(){
    this.router.navigate(['patient/create-patient']);
  }
  showme()
  {
    this.reportBox = false;
    this.prescriptionBox = true;
  }
  viewReport()
  {
    this.reportBox = true;
    this.prescriptionBox = false;
  }


}
