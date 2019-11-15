import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Pharmacies} from '../../../model/create-medicine';
import {CreateTemplate} from '../../../model/create-template';
import {PrescriptionService} from '../../../service/prescription.service';
import {TemplateService} from '../../../service/template.service';
import {ChiefComplains} from "../../../model/chief-complain";
import {OnExaminations} from "../../../model/on-examination";
import {Diagnosises} from "../../../model/on-diagonsis";


@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  chiefComplainArray: Array<string> = [];
  parameter: Array<string> = [];
  remark: Array<string> = [];
  dentalHistoryArray: Array<string> = [];
  vaccinationHistoryArray: Array<string> = [];
  investigationArray: Array<string> = [];
  radiologicalArray: Array<string> = [];
  planningArray: Array<string> = [];
  medicineList: Array<string> = [];
  form: FormGroup;
  submitted = false;
  serverError = '';
  templateId: string;
  selectedTemplate: any;
  selectedTemplateId: string;
  createMedicinePrescription: Array<Pharmacies> = [];

  constructor(private formBuilder: FormBuilder, private templateService: TemplateService,
              private prescriptionService: PrescriptionService, private route: ActivatedRoute) {
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

    const chiefComplain = this.form.controls['chiefComplain'].value;
    chiefComplain.forEach(function (chiefComplain) {
      const chiefComplainObj: ChiefComplains = new ChiefComplains();
      chiefComplainObj.complain = chiefComplain;
      prescription.chiefComplain.push(chiefComplainObj);
    });


    // prescription.chiefComplain = this.form.controls['chiefComplain'].value;
    // prescription.parameters = this.form.controls['parameters'].value;
    //prescription.remarks = this.form.controls['remarks'].value;

    const parameters = this.form.controls['parameters'].value;
    const remarks = this.form.controls['remarks'].value;
    for (let i = 0; i < Math.max(parameters.length, remarks.length); i++) {
      const onExamination: OnExaminations = new OnExaminations();
      if (remarks[i] == null) {
        onExamination.remark = 'null';
        onExamination.parameter = parameters[i];
        prescription.onExaminations.push(onExamination);
      } else if (parameters[i] == null) {
        onExamination.parameter = 'null';
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination);
      } else if (parameters[i] != null && remarks[i] != null) {
        onExamination.parameter = parameters[i];
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination);
      } else if (parameters[i] == null && parameters[i] == null) {
        onExamination.parameter = 'null';
        onExamination.remark = 'null';
        prescription.onExaminations.push(onExamination);
      }
    }
    /*prescription.dentalHistory = this.form.controls['dentalHistory'].value;
    prescription.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    prescription.investigation = this.form.controls['investigation'].value;
    prescription.radiological = this.form.controls['radiological'].value;
    prescription.planning = this.form.controls['planning'].value;
*/

    const dentalHistory = this.form.controls['dentalHistory'].value;
    const vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    const investigation = this.form.controls['investigation'].value;
    const radiological = this.form.controls['radiological'].value;
    const planning = this.form.controls['planning'].value;

    for (let i = 0; i < Math.max(dentalHistory.length, vaccinationHistory.length,
      investigation.length, radiological.length, planning.length); i++) {
      const diagonsises: Diagnosises = new Diagnosises();
      if (dentalHistory[i] == null) {
        diagonsises.medicalHistory = 'null';
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      } else if (vaccinationHistory[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = 'null';
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      } else if (investigation[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = 'null';
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      } else if (radiological[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = 'null';
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      } else if (planning[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = 'null';
        prescription.diagnosis.push(diagonsises);
      } else if (dentalHistory[i] == null && vaccinationHistory[i] == null
        && investigation[i] == null && radiological[i] == null && planning[i] == null) {
        diagonsises.medicalHistory = 'null';
        diagonsises.drugHistory = 'null';
        diagonsises.investigation = 'null';
        diagonsises.finalDiagnosis = 'null';
        diagonsises.clinicalFinDing = 'null';
        prescription.diagnosis.push(diagonsises);
      } else if (dentalHistory[i] != null && vaccinationHistory[i] != null
        && investigation[i] != null && radiological[i] != null && planning[i] != null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }
    }

    const createDrug: Pharmacies = new Pharmacies();
    createDrug.medicineType = this.form.controls['drugType'].value;
    createDrug.name = this.form.controls['medicineName'].value;
    createDrug.medicineStrength = this.form.controls['drugStrength'].value;
    createDrug.instruction = this.form.controls['drugDose'].value;
    createDrug.noOfTime = this.form.controls['drugDuration'].value;
    prescription.createMedicinePrescription.push(createDrug);

    this.templateService.editTemplate(this.templateId,

      prescription.templateName,
      prescription.chiefComplain,
      prescription.onExaminations,
      prescription.diagnosis,
      this.createMedicinePrescription).subscribe(res => {
      console.log(this.templateId)

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  selectTemplate(selectedTemplateId) {

    this.templateService.getTemplateViewById(selectedTemplateId).subscribe(res => {
      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res;
      this.form.controls['templateName'].setValue(this.selectedTemplate.templateName);
      this.selectedTemplate.chiefComplains.forEach((chiefComplains) => {
        this.chiefComplainArray.push(chiefComplains.chiefComplain);
      });
      this.form.controls['chiefComplain'].setValue(this.chiefComplainArray);

      this.selectedTemplate.onExaminations.forEach((onExaminations) => {
        this.parameter.push(onExaminations.parameter);
      });
      this.form.controls['parameters'].setValue(this.parameter);

      this.selectedTemplate.onExaminations.forEach((onExaminations) => {
        this.remark.push(onExaminations.remark);
      });
      this.form.controls['remarks'].setValue(this.remark);

      this.selectedTemplate.diagnosises.forEach((diagnosises) => {
        this.dentalHistoryArray.push(diagnosises.medicalHistory);
      });
      this.form.controls['dentalHistory'].setValue(this.dentalHistoryArray);

      this.selectedTemplate.diagnosises.forEach((diagnosises) => {
        this.vaccinationHistoryArray.push(diagnosises.drugHistory);
      });
      this.form.controls['vaccinationHistory'].setValue(this.vaccinationHistoryArray);

      this.selectedTemplate.diagnosises.forEach((diagnosises) => {
        this.investigationArray.push(diagnosises.investigation);
      });
      this.form.controls['investigation'].setValue(this.investigationArray);

      this.selectedTemplate.diagnosises.forEach((diagnosises) => {
        this.radiologicalArray.push(diagnosises.finalDiagnosis);
      });
      this.form.controls['radiological'].setValue(this.radiologicalArray);

      this.selectedTemplate.diagnosises.forEach((diagnosises) => {
        this.planningArray.push(diagnosises.clinicalFinDing);
      });
      this.form.controls['planning'].setValue(this.planningArray);

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

  addMedicine() {

    const createDrug: Pharmacies = new Pharmacies();
    createDrug.medicineType = this.form.controls['drugType'].value;
    createDrug.name = this.form.controls['medicineName'].value;
    createDrug.medicineStrength = this.form.controls['drugStrength'].value;
    createDrug.instruction = this.form.controls['drugDose'].value;
    createDrug.noOfTime = this.form.controls['drugDuration'].value;
    this.createMedicinePrescription.push(createDrug);
  }


  deleteTemplate(medicine) {

    this.createMedicinePrescription.splice(this.createMedicinePrescription.indexOf(medicine), 1);
  }
}
