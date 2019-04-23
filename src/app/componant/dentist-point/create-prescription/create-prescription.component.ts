import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatePrescription} from '../../../model/create-prescription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrescriptionService} from '../../../service/prescription.service';
import {CreateDrug} from '../../../model/create-medicine';
import {Template} from '../../../model/template';


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  selectedTemplate: any;
  selectedTemplateId: string;
  templateList: Template[];
  prescriptionResp: any;
  form: FormGroup;
  submitted = false;
  serverError = '';
  patientId: string;
  medicineList: CreateDrug[] = [];

  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      chiefComplain: ['', Validators.required],
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

    this.prescriptionService.getPrescriptionView().subscribe(res => {
      this.prescriptionResp = res;
      this.templateList = [];
      res['items'].forEach((template) => {
        const t = new Template();
        t.id = template.id;
        t.templateName = template.templateName;
        this.templateList.push(t);
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.controls['chiefComplain'].value);
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const prescription: CreatePrescription = new CreatePrescription();
    prescription.patientId = this.patientId;
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

    this.prescriptionService.createPrescription(
      prescription.patientId,
      prescription.chiefComplain,
      prescription.parameters,
      prescription.remarks,
      prescription.dentalHistory,
      prescription.vaccinationHistory,
      prescription.investigation,
      prescription.radiological,
      prescription.planning,
      this.medicineList).subscribe(res => {

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
    this.medicineList.push(createDrug);

  }

  selectTemplate(selectedTemplateId) {

    this.prescriptionService.getPrescriptionView().subscribe(res => {

      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res['items'].find(template => template.id === selectedTemplateId);
      this.form.controls['chiefComplain'].setValue(this.selectedTemplate.chiefComplain);
      this.form.controls['parameters'].setValue(this.selectedTemplate.parameters);
      this.form.controls['remarks'].setValue(this.selectedTemplate.remarks);
      this.form.controls['dentalHistory'].setValue(this.selectedTemplate.dentalHistory);
      this.form.controls['vaccinationHistory'].setValue(this.selectedTemplate.vaccinationHistory);
      this.form.controls['investigation'].setValue(this.selectedTemplate.investigation);
      this.form.controls['radiological'].setValue(this.selectedTemplate.radiological);
      this.form.controls['planning'].setValue(this.selectedTemplate.planning);

      this.medicineList = [];
      this.selectedTemplate['medicines'].forEach((medicine) => {
        const createDrug: CreateDrug = new CreateDrug();
        createDrug.drugType = medicine.drugType;
        createDrug.medicineName = medicine.medicineName;
        createDrug.drugStrength = medicine.drugStrength;
        createDrug.drugDose = medicine.drugDose;
        createDrug.drugDuration = medicine.drugDuration;
        this.medicineList.push(createDrug);
      });
    });
  }

  onCancel() {
    this.router.navigate(['doctors/calendar-view']);
  }
}
