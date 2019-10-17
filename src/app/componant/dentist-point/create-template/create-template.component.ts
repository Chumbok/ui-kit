import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TemplateService} from '../../../service/template.service';
import {Pharmacies} from '../../../model/create-medicine';
import {CreatePrescription} from "../../../model/create-prescription";
import {ChiefComplains} from "../../../model/chief-complain";
import {OnExaminations} from "../../../model/on-examination";
import {Diagnosises} from "../../../model/on-diagonsis";
import {FlashMessageService} from "../../../service/flash-message.service";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  medicineList: Pharmacies[] = [];
  form: FormGroup;
  submitted = false;
  serverError = '';
  patientId: string;
  createMedicinePrescription: Array<Pharmacies> = [];
  chiefComplainArray: Array<any> = [];
  chiefParametersArray: Array<any> = [];
  chiefRemarksArray: Array<any> = [];
  dentalHistoryArray: Array<any> = [];
  vaccinationHistoryArray: Array<any> = [];
  investigationArray: Array<any> = [];
  radiologicalArray: Array<any> = [];
  planningArray: Array<any> = [];
  templateName: string;

  constructor(private formBuilder: FormBuilder, private prescriptionService: TemplateService, private flashMessageService: FlashMessageService,
              private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });

  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      templateName: [''],
      complain: [''],
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
    prescription.patientId = 'trt';
    var chiefComplain = new String(this.form.controls['complain'].value).split(",");
    chiefComplain.forEach(function (chiefComplain) {
      const chiefComplainObj: ChiefComplains = new ChiefComplains();
      chiefComplainObj.complain = chiefComplain;
      prescription.chiefComplain.push(chiefComplainObj)
    });

    var parameters = new String(this.form.controls['parameters'].value).split(",");
    var remarks = new String(this.form.controls['remarks'].value).split(",");
    for (let i = 0; i < Math.max(parameters.length, remarks.length); i++) {
      const onExamination: OnExaminations = new OnExaminations();
      if (remarks[i] == null) {
        onExamination.remark = 'null';
        onExamination.parameter = parameters[i];
        prescription.onExaminations.push(onExamination)
      } else if (parameters[i] == null) {
        onExamination.parameter = 'null';
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination)
      } else if (parameters[i] != null && remarks[i] != null) {
        onExamination.parameter = parameters[i];
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination)
      } else if (parameters[i] == null && parameters[i] == null) {
        onExamination.parameter = 'null';
        onExamination.remark = 'null';
        prescription.onExaminations.push(onExamination)
      }

    }

    var dentalHistory = new String(this.form.controls['dentalHistory'].value).split(",");
    var vaccinationHistory = new String(this.form.controls['vaccinationHistory'].value).split(",");
    var investigation = new String(this.form.controls['investigation'].value).split(",");
    var radiological = new String(this.form.controls['radiological'].value).split(",");
    var planning = new String(this.form.controls['planning'].value).split(",");

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
    createDrug.noOfTime = this.form.controls['drugDose'].value;
    createDrug.instruction = this.form.controls['drugDuration'].value;
    prescription.createMedicinePrescription.push(createDrug);

    this.templateName = this.form.controls['templateName'].value;
    this.prescriptionService.createTemplate(
      this.templateName,
      prescription.chiefComplain,
      prescription.onExaminations,
      prescription.diagnosis,


      this.createMedicinePrescription).subscribe(res => {
      this.router.navigate(['doctors/calendar-view']);
      this.flashMessageService.showFlashMessage({
          messages: ['Save Successfully '], dismissible: true,
          type: 'primary'
        }
      );

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
    /*this.chiefComplainArray.push(this.splitMultiLine(this.form.controls['complain'].value));
    this.chiefParametersArray.push(this.splitMultiLine(this.form.controls['parameters'].value));
    this.chiefRemarksArray.push(this.splitMultiLine(this.form.controls['remarks'].value));
    this.dentalHistoryArray.push(this.splitMultiLine(this.form.controls['dentalHistory'].value));
    this.vaccinationHistoryArray.push(this.splitMultiLine(this.form.controls['vaccinationHistory'].value));
    this.investigationArray.push(this.splitMultiLine(this.form.controls['investigation'].value));
    this.radiologicalArray.push(this.splitMultiLine(this.form.controls['radiological'].value));
    this.planningArray.push(this.splitMultiLine(this.form.controls['planning'].value));
    this.templateName = this.form.controls['templateName'].value;
    this.prescriptionService.createTemplate(this.templateName, this.chiefComplainArray, this.chiefParametersArray,
      this.chiefRemarksArray, this.dentalHistoryArray, this.vaccinationHistoryArray, this.investigationArray,
      this.radiologicalArray, this.planningArray, this.createMedicinePrescription).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });*/
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

  splitMultiLine(str): Array<string> {
    const splitted = str.split('\n', 200); // 200 is number of string
    return splitted;
  }
}
