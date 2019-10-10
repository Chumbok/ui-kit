import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from '../../../service/prescription.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pharmacies} from '../../../model/create-medicine';

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
  chiefComplain: string;
  parameters: string;
  remarks: string;
  dentalHistory: string;
  vaccinationHistory: string;
  investigation: string;
  radiological: string;
  planning: string;
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
      console.log(" Template Id" + selectedTemplateId);

      this.selectedTemplate['chiefComplains'].forEach((chiefComplains) => {
        this.chiefComplainArray.push(chiefComplains.chiefComplain);
      });

      this.selectedTemplate['onExaminations'].forEach((onExaminations) => {
        this.onExaminationsParametersArray.push(onExaminations.parameter);
      });

      this.selectedTemplate['onExaminations'].forEach((onExaminations) => {
        this.onExaminationsRemarkArray.push(onExaminations.remark);
      });

      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.dentalHistoryArray.push(diagnosises.medicalHistory);
      });

      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.vaccinationHistoryArray.push(diagnosises.drugHistory);
      });

      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.investigationArray.push(diagnosises.investigation);
      });

      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.radiologicalArray.push(diagnosises.finalDiagnosis);
      });

      this.selectedTemplate['diagnosises'].forEach((diagnosises) => {
        this.planningArray.push(diagnosises.clinicalFinDing);
      });


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
