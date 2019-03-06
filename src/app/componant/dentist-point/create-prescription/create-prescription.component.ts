import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CreatePrescription} from "../../../model/create-prescription";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrescriptionService} from "../../../service/prescription.service";


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  chief
  form:FormGroup;
  submitted = false;
  serverError = '';

  constructor(private formBuilder: FormBuilder, private prescriptionService :PrescriptionService,private route: ActivatedRoute,private router: Router) {
   /* this.route.params.subscribe(params => {


    });*/
  }



  ngOnInit() {
    this.form = this.formBuilder.group({
      complain: ['', Validators.required]

    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const prescription: CreatePrescription = new CreatePrescription();
    prescription.chiefComplain = this.form.controls['complain'].value;



    this.prescriptionService.createPrescription( prescription.chiefComplain).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }



}
