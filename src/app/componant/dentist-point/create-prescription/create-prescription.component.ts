import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatePrescription} from '../../../model/create-prescription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrescriptionService} from '../../../service/prescription.service';


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  chief
  form: FormGroup;
  submitted = false;
  serverError = '';
  permitar: string;
  remark: string;

  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private route: ActivatedRoute,
              private router: Router) {
   /* this.route.params.subscribe(params => {


    });*/
  }



  ngOnInit() {
    this.form = this.formBuilder.group({
      complain: ['', Validators.required],
      parameters: [''],
      remarks: [''],
      dentalHistory: [''],
      vaccinationHistory: [''],
      investigation: [''],
      rediological: [''],
      planning: [''],
      drugType: [''],
      medicinName: [''],
      drugStrength: [''],
      drugDose: [''],
      drugDuration: ['']
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
    prescription.parameters = this.form.controls['parameters'].value;
    prescription.remarks = this.form.controls['remarks'].value;
    prescription.dentalHistory = this.form.controls['dentalHistory'].value;
    prescription.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    prescription.investigation = this.form.controls['investigation'].value;
    prescription.rediological = this.form.controls['rediological'].value;
    prescription.planning = this.form.controls['planning'].value;
    prescription.drugType = this.form.controls['drugType'].value;
    prescription.medicinName = this.form.controls['medicinName'].value;
    prescription.drugStrength = this.form.controls['drugStrength'].value;
    prescription.drugDose = this.form.controls['drugDose'].value;
    prescription.drugDuration = this.form.controls['drugDuration'].value;
    this.prescriptionService.createPrescription(prescription.chiefComplain, prescription.parameters, prescription.remarks,
      prescription.dentalHistory, prescription.vaccinationHistory, prescription.investigation, prescription.rediological,
      prescription.planning, prescription.drugType, prescription.medicinName, prescription.drugStrength,
      prescription.drugDose, prescription.drugDuration).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }



}
