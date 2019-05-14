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
  chiefComplainArray: Array<string> = [];
  chiefParametersArray: Array<string> = [];
  chiefRemarksArray: Array<string> = [];
  dentalHistoryArray: Array<string> = [];
  vaccinationHistoryArray: Array<string> = [];
  investigationArray: Array<string> = [];
  radiologicalArray: Array<string> = [];
  planningArray: Array<string> = [];
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

  onKeypress(event) {
    if (this.form.controls['complain'].value) {
      this.chiefComplainArray.push(this.form.controls['complain'].value);
      this.form.controls['complain'].setValue('');
    }
    if (this.form.controls['parameters'].value) {
      this.chiefParametersArray.push(this.form.controls['parameters'].value);
      this.form.controls['parameters'].setValue('');
    }
    if (this.form.controls['remarks'].value) {
      this.chiefRemarksArray.push(this.form.controls['remarks'].value);
      this.form.controls['remarks'].setValue('');
    }
    if (this.form.controls['dentalHistory'].value) {
      this.dentalHistoryArray.push(this.form.controls['dentalHistory'].value);
      this.form.controls['dentalHistory'].setValue('');
    }
    if (this.form.controls['vaccinationHistory'].value) {
      this.vaccinationHistoryArray.push(this.form.controls['vaccinationHistory'].value);
      this.form.controls['vaccinationHistory'].setValue('');
    }
    if (this.form.controls['investigation'].value) {
      this.investigationArray.push(this.form.controls['investigation'].value);
      this.form.controls['investigation'].setValue('');
    }
    if (this.form.controls['radiological'].value) {
      this.radiologicalArray.push(this.form.controls['radiological'].value);
      this.form.controls['radiological'].setValue('');
    }
    if (this.form.controls['planning'].value) {
      this.planningArray.push(this.form.controls['planning'].value);
      this.form.controls['planning'].setValue('');
    }
  }

  deletes(index, arrayList) {
    arrayList.splice(index, 1);
    console.log(index);
  }
}
