import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TemplateService} from '../../../service/template.service';
import {CreateDrug} from '../../../model/create-medicine';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  serverError = '';
  patientId: string;
  createMedicinePrescription: Array<CreateDrug> = [];
  chiefComplainArray: Array<any> = [];
  chiefParametersArray: Array<any> = [];
  chiefRemarksArray: Array<any> = [];
  dentalHistoryArray: Array<any> = [];
  vaccinationHistoryArray: Array<any> = [];
  investigationArray: Array<any> = [];
  radiologicalArray: Array<any> = [];
  planningArray: Array<any> = [];
  templateName: string;

  constructor(private formBuilder: FormBuilder, private prescriptionService: TemplateService,
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
    this.chiefComplainArray.push(this.splitMultiLine(this.form.controls['complain'].value));
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
    });
  }

  addMedicine() {
    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    this.createMedicinePrescription.push(createDrug);
  }

  splitMultiLine(str): Array<string> {
    const splitted = str.split('\n', 200); // 200 is number of string
    return splitted;
  }
}
