import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from '../../../service/prescription.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateDrug} from '../../../model/create-medicine';

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.css']
})
export class PrescriptionViewComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  serverError = '';
  templateId: string;
  createMedicinePrescription: Array<CreateDrug> = [];
  selectedTemplateId: string;
  selectedTemplate: any;
  chiefComplain: string;
  parameters: string;
  remarks: string;
  dentalHistory: string;
  vaccinationHistory: string;
  investigation: string;
  radiological: string;
  planning: string;

  constructor(private formBuilder: FormBuilder, private prescriptionService1: PrescriptionService,
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
    this.onPrescriptionView(this.templateId);
  }


  onPrescriptionView(selectedTemplateId) {

    this.prescriptionService1.getPrescriptionView().subscribe(res => {

      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res['items'].find(template => template.id === selectedTemplateId);
      this.chiefComplain = this.selectedTemplate.chiefComplain;
      this.parameters = this.selectedTemplate.parameters;
      this.remarks = this.selectedTemplate.remarks;
      this.dentalHistory = this.selectedTemplate.dentalHistory;
      this.vaccinationHistory = this.selectedTemplate.vaccinationHistory;
      this.investigation = this.selectedTemplate.investigation;
      this.radiological = this.selectedTemplate.radiological;
      this.planning = this.selectedTemplate.planning;

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

}
