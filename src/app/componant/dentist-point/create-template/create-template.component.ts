import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateTemplate} from "../../../model/create-template";
import {TemplateService} from "../../../service/template.service";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  serverError = '';
  templateId: string;

  constructor(private formBuilder: FormBuilder, private templateService: TemplateService, private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.templateId = params['id'];
    });

  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      complain: ['', Validators.required],
      parameters: [''],
      templateName: [''],
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

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const template: CreateTemplate = new CreateTemplate();
    template.templateId = "9388c9ea-f453-41de-96cb-d388dedbf091";
    template.chiefComplain = this.form.controls['complain'].value;
    template.templateName = this.form.controls['templateName'].value;
    template.parameters = this.form.controls['parameters'].value;
    template.remarks = this.form.controls['remarks'].value;
    template.dentalHistory = this.form.controls['dentalHistory'].value;
    template.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    template.investigation = this.form.controls['investigation'].value;
    template.radiological = this.form.controls['radiological'].value;
    template.planning = this.form.controls['planning'].value;
    template.drugType = this.form.controls['drugType'].value;
    template.medicineName = this.form.controls['medicineName'].value;
    template.drugStrength = this.form.controls['drugStrength'].value;
    template.drugDose = this.form.controls['drugDose'].value;
    template.drugDuration = this.form.controls['drugDuration'].value;
    this.templateService.createTemplate(template.templateId, template.templateName, template.chiefComplain, template.parameters,
      template.remarks, template.dentalHistory, template.vaccinationHistory, template.investigation,
      template.radiological, template.planning, template.drugType, template.medicineName, template.drugStrength,
      template.drugDose, template.drugDuration).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  onClickPrescription() {
    this.router.navigate(['doctors/prescription-list']);

  }



}
