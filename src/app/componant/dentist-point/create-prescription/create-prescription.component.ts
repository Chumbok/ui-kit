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

  form: FormGroup;
  submitted = false;
  serverError = '';
  patientId: string;

  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });

  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      complain: ['', Validators.required],
      parameters: [''],
      remarks: [''],
      dentalHistory: [''],
      vaccinationHistory: [''],
      investigation: [''],
      radiological: [''],
      planning: [''],
      drugType: [''],
      medicineName: [''],
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
      return true;
    }
    const prescription: CreatePrescription = new CreatePrescription();
    prescription.patientId = "9388c9ea-f453-41de-96cb-d388dedbf091";
    prescription.chiefComplain = this.form.controls['complain'].value;
    prescription.parameters = this.form.controls['parameters'].value;
    prescription.remarks = this.form.controls['remarks'].value;
    prescription.dentalHistory = this.form.controls['dentalHistory'].value;
    prescription.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    prescription.investigation = this.form.controls['investigation'].value;
    prescription.radiological = this.form.controls['radiological'].value;
    prescription.planning = this.form.controls['planning'].value;
    prescription.drugType = this.form.controls['drugType'].value;
    prescription.medicineName = this.form.controls['medicineName'].value;
    prescription.drugStrength = this.form.controls['drugStrength'].value;
    prescription.drugDose = this.form.controls['drugDose'].value;
    prescription.drugDuration = this.form.controls['drugDuration'].value;
    this.prescriptionService.createPrescription(prescription.patientId, prescription.chiefComplain, prescription.parameters,
      prescription.remarks, prescription.dentalHistory, prescription.vaccinationHistory, prescription.investigation,
      prescription.radiological, prescription.planning, prescription.drugType, prescription.medicineName, prescription.drugStrength,
      prescription.drugDose, prescription.drugDuration).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  /*onClickPrescription() {
    this.router.navigate(['doctors/prescription-list']);

  }*/


}
