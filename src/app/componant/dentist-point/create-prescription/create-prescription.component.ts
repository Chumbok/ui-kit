import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from '@angular/http';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  public reportBox = true;
  public prescriptionBox = false;
  public complainsvariable: string;
  complainObj: object = {};
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

  addComplain = function (complains) {
    this.complainObj = {
      "Complains": complains.complain,
      /**
       TODO: for Object
       */

    }
    this.complainsvariable = complains.complain;

  }
  onExaminationObj: object = {};
  addOnExamination = function (complains) {
    this.onExaminationObj = {
      /**
       TODO: for Object
       */


    }
    console.log(complains.parameters);
    console.log(complains.remarks);
    console.log(this.complainsvariable);
  }
  diginistObj: object = {};
  addDiginist = function (complains) {
    this.diginistObj = {
      /**
       TODO: for Object
       */


    }
    console.log(complains.dentalHistory);
    console.log(complains.vaccinationHistory);
    console.log(complains.investigation);
    console.log(complains.rediological);
    console.log(complains.treatmentPlanning);
  }
  prescriptionObj: object = {};
  addPrescription = function (complains) {
    this.prescriptionObj = {
      /**
       TODO: for Object
       */


    }
    console.log(complains.drug);
    console.log(complains.medicinName);
    console.log(complains.drugStrength);
    console.log(complains.drugDose);
    console.log(complains.drugDuration);

  }

  constructor(private router: Router, private http: Http) {
  }
}
