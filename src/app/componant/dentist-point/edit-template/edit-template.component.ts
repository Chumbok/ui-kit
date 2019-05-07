import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateDrug} from "../../../model/create-medicine";
import {TemplateService} from "../../../service/template.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateTemplate} from "../../../model/create-template";
import {PrescriptionService} from "../../../service/prescription.service";

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  serverError = '';
  templateId: string;
  createMedicinePrescription: Array<CreateDrug> = [];
  selectedTemplateId: string;
  selectedTemplate: any;

  constructor(private formBuilder: FormBuilder, private prescriptionService: TemplateService, private prescriptionService1: PrescriptionService,
              private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.templateId = params['id'];
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      templateName: [''],
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
    this.selectTemplate(this.templateId);
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const prescription: CreateTemplate = new CreateTemplate();
    prescription.templateName = this.form.controls['templateName'].value;

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


    this.prescriptionService.editTemplate(this.templateId, prescription.templateName, prescription.chiefComplain,
      prescription.parameters, prescription.remarks, prescription.dentalHistory,
      prescription.vaccinationHistory, prescription.investigation, prescription.radiological,
      prescription.planning, this.createMedicinePrescription).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }
  selectTemplate(selectedTemplateId) {

    this.prescriptionService1.getPrescriptionView().subscribe(res => {

      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res['items'].find(template => template.id === selectedTemplateId);
        this.form.controls['templateName'].setValue(this.selectedTemplate.templateName);
        this.form.controls['chiefComplain'].setValue(this.selectedTemplate.chiefComplain);
        this.form.controls['parameters'].setValue(this.selectedTemplate.parameters);
        this.form.controls['remarks'].setValue(this.selectedTemplate.remarks);
        this.form.controls['dentalHistory'].setValue(this.selectedTemplate.dentalHistory);
        this.form.controls['vaccinationHistory'].setValue(this.selectedTemplate.vaccinationHistory);
        this.form.controls['investigation'].setValue(this.selectedTemplate.investigation);
        this.form.controls['radiological'].setValue(this.selectedTemplate.radiological);
        this.form.controls['planning'].setValue(this.selectedTemplate.planning);

      this.selectedTemplate['medicines'].forEach((medicine) => {
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
  addMedicine() {
    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    this.createMedicinePrescription.push(createDrug)
  }
}
