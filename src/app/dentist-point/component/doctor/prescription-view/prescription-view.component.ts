import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pharmacies} from '../../../model/create-medicine';
import {PrescriptionService} from '../../../service/prescription.service';


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
  createMedicinePrescription: Array<Pharmacies> = [];
  selectedTemplateId: string;
  selectedTemplate: any;
  chiefComplain: string = '';
  parameters: string = '';
  remarks: string = '';
  dentalHistory: string = '';
  vaccinationHistory: string = '';
  investigation: string = '';
  radiological: string = '';
  planning: string = '';
  chiefComplainArray: Array<string> = [];
  onExaminationsParametersArray: Array<string> = [];
  onExaminationsRemarkArray: Array<string> = [];
  dentalHistoryArray: Array<string> = [];
  vaccinationHistoryArray: Array<string> = [];
  investigationArray: Array<string> = [];
  radiologicalArray: Array<string> = [];
  planningArray: Array<string> = [];

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

    this.chiefComplainArray = [];
    this.onExaminationsParametersArray = [];
    this.onExaminationsRemarkArray = [];
    this.dentalHistoryArray = [];
    this.vaccinationHistoryArray = [];
    this.investigationArray = [];
    this.radiologicalArray = [];
    this.planningArray = [];

    this.prescriptionService1.getPrescriptionView(selectedTemplateId).subscribe(res => {
      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res;
      this.selectedTemplate['chiefComplains'].forEach((chiefComplains) => {
        this.chiefComplain = this.chiefComplain + chiefComplains.chiefComplain + ', ';
      });
      this.chiefComplainArray.push(this.chiefComplain);
      this.selectedTemplate['onExaminations'].forEach((onExaminations) => {
        this.parameters = this.parameters + onExaminations.parameter + ', ';
      });
      this.onExaminationsParametersArray.push(this.parameters);
      this.selectedTemplate['onExaminations'].forEach((onExaminations) => {
        this.remarks = this.remarks + onExaminations.remark + ', ';
      });
      this.onExaminationsRemarkArray.push(this.remarks);
      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.vaccinationHistory = this.vaccinationHistory + diagnosises.medicalHistory + ', ';
      });
      this.dentalHistoryArray.push(this.vaccinationHistory);
      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.dentalHistory = this.dentalHistory + diagnosises.drugHistory + ', ';
      });
      this.vaccinationHistoryArray.push(this.dentalHistory);
      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.investigation = this.investigation + diagnosises.investigation + ', ';
      });
      this.investigationArray.push(this.investigation);
      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.radiological = this.radiological + diagnosises.finalDiagnosis + ', ';
      });
      this.radiologicalArray.push(this.radiological);
      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.planning = this.planning + diagnosises.clinicalFinDing + ', ';
      });
      this.planningArray.push(this.planning);
      this.selectedTemplate['pharmacies'].forEach((medicine) => {
        const createDrug: Pharmacies = new Pharmacies();
        createDrug.medicineType = medicine.medicineType;
        createDrug.name = medicine.name;
        createDrug.medicineStrength = medicine.medicineStrength;
        createDrug.noOfTime = medicine.noOfTime;
        createDrug.instruction = medicine.instruction;
        this.createMedicinePrescription.push(createDrug);

      });
    });
  }

}
