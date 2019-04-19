import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatePrescription} from '../../../model/create-prescription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrescriptionService} from '../../../service/prescription.service';
import {CreateDrug} from "../../../model/create-medicine";


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  selectedTemplate: any;
  prescriptionResp: any;
  selectedTemplateName: Array<any> = [];
  form: FormGroup;
  submitted = false;
  serverError = '';
  patientId: string;
  createMedicinePrescription: Array<CreateDrug> = [];


  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });

  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      chiefComplain: ['', Validators.required],
      parameters: ['', Validators.required],
      remarks: ['', Validators.required],
      dentalHistory: ['', Validators.required],
      vaccinationHistory: ['', Validators.required],
      investigation: ['', Validators.required],
      radiological: ['', Validators.required],
      planning: ['', Validators.required],
      drugType: [''],
      medicineName: [''],
      drugStrength: [''],
      drugDose: [''],
      drugDuration: ['']


    });
    this.prescriptionService.getPrescriptionView().subscribe(res => {
      this.prescriptionResp = res;
      this.selectedTemplateName = [];

      this.selectedTemplate = res['items'].forEach((template) => {
        const prescription: CreatePrescription = new CreatePrescription();
        prescription.templateName = template.templateName;
        this.selectedTemplateName.push(prescription);
      });

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
    prescription.chiefComplain = this.form.controls['chiefComplain'].value;
    prescription.parameters = this.form.controls['parameters'].value;
    prescription.remarks = this.form.controls['remarks'].value;
    prescription.dentalHistory = this.form.controls['dentalHistory'].value;
    prescription.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    prescription.investigation = this.form.controls['investigation'].value;
    prescription.radiological = this.form.controls['radiological'].value;
    prescription.planning = this.form.controls['planning'].value;

    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    prescription.createMedicinePrescription.push(createDrug);


    this.prescriptionService.createPrescription(prescription.patientId, prescription.chiefComplain, prescription.parameters, prescription.remarks, prescription.dentalHistory,
      prescription.vaccinationHistory, prescription.investigation, prescription.radiological, prescription.planning, this.createMedicinePrescription).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  addMedicine() {
    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    this.createMedicinePrescription.push(createDrug)

  }

  selectTemplate(id) {
    this.prescriptionService.getPrescriptionView().subscribe(res => {

      this.createMedicinePrescription = [];

      this.prescriptionResp = res;
      this.selectedTemplate = res['items'][id];

      this.selectedTemplate['medicine'].forEach((medicine) => {

        const createDrug: CreateDrug = new CreateDrug();
        createDrug.drugType = medicine.drugType;
        createDrug.medicineName = medicine.medicineName;
        createDrug.drugStrength = medicine.drugStrength;
        createDrug.drugDose = medicine.drugDose;
        createDrug.drugDuration = medicine.drugDuration;
        this.createMedicinePrescription.push(createDrug);

      });

    });
  }

  onCancel() {
    this.router.navigate(['doctors/calendar-view']);
  }
}
