import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatePrescription} from '../../../model/create-prescription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrescriptionService} from '../../../service/prescription.service';
import {CreateDrug} from '../../../model/create-medicine';
import {Template} from '../../../model/template';
import {TemplateService} from '../../../service/template.service';
import {Diagnosis} from "../../../model/on-diagonsis";
import {OnExamination} from "../../../model/on-examination";
import {ChiefComplain} from "../../../model/chief-complain";


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  urls = [];
  selectedTemplate: any;
  selectedTemplateId: string;
  templateList: Template[];
  prescriptionResp: any;
  form: FormGroup;
  submitted = false;
  serverError = '';
  medicineList: CreateDrug[] = [];
  public show_dialog = false;
  public profileView = false;
  public show_previousPrescription = false;
  patientId: string;
  appointmentId: string;
  patientName: string;
  phoneNumber: string;
  address: string;
  date: string;
  age: string;
  bloodGroup: string;
  prescriptionListin: Array<any> = [];
  prescription: any;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  config: any;
  chiefComplainArray: Array<string> = [];
  chiefComplainArrayView: Array<string> = [];
  chiefParametersArray: Array<string> = [];
  chiefParametersArrayView: Array<string> = [];
  chiefRemarksArray: Array<string> = [];
  chiefRemarksArrayView: Array<string> = [];
  dentalHistoryArray: Array<string> = [];
  dentalHistoryArrayView: Array<string> = [];
  vaccinationHistoryArray: Array<string> = [];
  vaccinationHistoryArrayView: Array<string> = [];
  investigationArray: Array<string> = [];
  investigationArrayView: Array<string> = [];
  radiologicalArray: Array<string> = [];
  radiologicalArrayView: Array<string> = [];
  planningArray: Array<string> = [];
  planningArrayView: Array<string> = [];

  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private templateService: TemplateService,
              private route: ActivatedRoute, private router: Router) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
    this.route.params.subscribe(params => {
      this.patientId = this.route.snapshot.queryParams['patientId'];
      this.appointmentId = this.route.snapshot.queryParams['appointmentId'];
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
      drugDuration: [''],
      patientName: [''],
      phoneNumber: [''],
      address: [''],
      date: ['']
    });

    /*  this.templateService.getTemplateView().subscribe(res => {
        this.prescriptionResp = res;
        this.templateList = [];
        res['items'].forEach((template) => {
          const t = new Template();
          t.id = template.id;
          t.templateName = template.templateName;
          this.templateList.push(t);
        });
      });*/
    this.onPatientView();
    this.selectPatient(this.patientId);
  }

  get f() {
    return this.form.controls;
  }

  dateFetching() {
    this.date = this.form.controls['date'].value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const prescription: CreatePrescription = new CreatePrescription();
    prescription.patientId = this.patientId;
    prescription.appointmentId = this.appointmentId;
    var chiefComplain = new String(this.form.controls['chiefComplain'].value).split(",");
    chiefComplain.forEach(function (chiefComplain) {
      const chiefComplainObj: ChiefComplain = new ChiefComplain();
      chiefComplainObj.complain = chiefComplain;
      prescription.chiefComplain.push(chiefComplainObj)
    })

    var parameters = new String(this.form.controls['parameters'].value).split(",");
    var remarks = new String(this.form.controls['remarks'].value).split(",");
    for (let i = 0; i < Math.max(parameters.length, remarks.length); i++) {
      const onExamination: OnExamination = new OnExamination();
      if (remarks[i] == null) {
        onExamination.remark = 'null';
        onExamination.parameter = parameters[i];
        prescription.onExaminations.push(onExamination)
      }
      else if (parameters[i] == null) {
        onExamination.parameter = 'null';
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination)
      }

      else if (parameters[i] != null && remarks[i] != null) {
        onExamination.parameter = parameters[i];
        onExamination.remark = remarks[i];
        prescription.onExaminations.push(onExamination)
      }

      else if (parameters[i] == null && parameters[i] == null) {
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

    for (let i = 0; i < Math.max(dentalHistory.length, vaccinationHistory.length, investigation.length, radiological.length, planning.length); i++) {
      const diagonsises: Diagnosis = new Diagnosis();

      if (dentalHistory[i] == null) {
        diagonsises.medicalHistory = 'null';
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }

      else if (vaccinationHistory[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = 'null';
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }

      else if (investigation[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = 'null';
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }

      else if (radiological[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = 'null';
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }

      else if (planning[i] == null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = 'null';
        prescription.diagnosis.push(diagonsises);
      }

      else if (dentalHistory[i] == null && vaccinationHistory[i] == null && investigation[i] == null && radiological[i] == null && planning[i] == null) {
        diagonsises.medicalHistory = 'null';
        diagonsises.drugHistory = 'null';
        diagonsises.investigation = 'null';
        diagonsises.finalDiagnosis = 'null';
        diagonsises.clinicalFinDing = 'null';
        prescription.diagnosis.push(diagonsises);
      }

      else if (dentalHistory[i] != null && vaccinationHistory[i] != null && investigation[i] != null && radiological[i] != null && planning[i] != null) {
        diagonsises.medicalHistory = dentalHistory[i];
        diagonsises.drugHistory = vaccinationHistory[i];
        diagonsises.investigation = investigation[i];
        diagonsises.finalDiagnosis = radiological[i];
        diagonsises.clinicalFinDing = planning[i];
        prescription.diagnosis.push(diagonsises);
      }

    }

    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    prescription.createMedicinePrescription.push(createDrug);

    this.prescriptionService.createPrescription(
      prescription.appointmentId,
      prescription.chiefComplain,
      prescription.onExaminations,
      prescription.diagnosis,
      this.date,
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
    this.chiefComplainArray = [];
    this.chiefParametersArray = [];
    this.chiefRemarksArray = [];
    this.dentalHistoryArray = [];
    this.vaccinationHistoryArray = [];
    this.investigationArray = [];
    this.radiologicalArray = [];
    this.planningArray = [];


    this.templateService.getTemplateView().subscribe(res => {

      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res['items'].find(template => template.id === selectedTemplateId);
      this.selectedTemplate.chiefComplains.forEach((chiefComplain) => {
        this.chiefComplainArray.push(chiefComplain);
      });
      this.selectedTemplate.parametersAll.forEach((parameter) => {
        this.chiefParametersArray.push(parameter);
      });
      this.selectedTemplate.remarksAll.forEach((remark) => {
        this.chiefRemarksArray.push(remark);
      });
      this.selectedTemplate.dentalHistorys.forEach((dentalHistory) => {
        this.dentalHistoryArray.push(dentalHistory);
      });
      this.selectedTemplate.vaccinationHistorys.forEach((vaccinationHistory) => {
        this.vaccinationHistoryArray.push(vaccinationHistory);
      });
      this.selectedTemplate.investigations.forEach((investigation) => {
        this.investigationArray.push(investigation);
      });
      this.selectedTemplate.radiologicals.forEach((radiological) => {
        this.radiologicalArray.push(radiological);
      });
      this.selectedTemplate.plannings.forEach((planning) => {
        this.planningArray.push(planning);
      });
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

  deleteTemplate(templateId) {
    this.templateService.deleteTemplate(templateId).subscribe(res => {
      //    console.log(res['items']);
    });
  }

  editTemplate(templateId) {
    this.router.navigate(['doctors/' + 'template/' + templateId + '/edit-template']);
  }

  onPatientView() {
    if (this.patientId) {
      this.profileView = !this.profileView;
      this.show_dialog = this.show_dialog;
      this.show_previousPrescription = !this.show_previousPrescription;
    } else {
      this.show_dialog = !this.show_dialog;
      this.profileView = this.profileView;
      this.show_previousPrescription = this.show_previousPrescription;
    }
  }

  selectPatient(patientId) {

    this.prescriptionService.getPatientProfile(patientId).subscribe(res => {

      this.patientName = res.name;
      this.phoneNumber = res.phoneNo;
      this.address = res.address;
      this.age = res.age;
      this.bloodGroup = res.bloodGroup;
    });
  }

  previousPrescriptionView() {
    this.previousPrescription(this.patientId);
  }


  previousPrescription(patientId) {
    this.router.navigate(['doctors/prescription-list'], {queryParams: {patient: patientId}});
  }


  onPrescriptionView(prescriptionId) {
    this.router.navigate(['doctors/' + 'prescription/' + prescriptionId + '/prescription-view']);
  }

  onClickTemplate(value, controller) {
    if (controller == 'chiefComplain') {
      this.chiefComplainArrayView.push(value);
      this.form.controls['chiefComplain'].setValue(this.chiefComplainArrayView);
    }
    if (controller == 'parameters') {
      this.chiefParametersArrayView.push(value);
      this.form.controls['parameters'].setValue(this.chiefParametersArrayView);
    }
    if (controller == 'remarks') {
      this.chiefRemarksArrayView.push(value);
      this.form.controls['remarks'].setValue(this.chiefRemarksArrayView);
    }
    if (controller == 'dentalHistory') {
      this.dentalHistoryArrayView.push(value);
      this.form.controls['dentalHistory'].setValue(this.dentalHistoryArrayView);
    }
    if (controller == 'vaccinationHistory') {
      this.vaccinationHistoryArrayView.push(value);
      this.form.controls['vaccinationHistory'].setValue(this.vaccinationHistoryArrayView);
    }
    if (controller == 'investigation') {
      this.investigationArrayView.push(value);
      this.form.controls['investigation'].setValue(this.investigationArrayView);
    }
    if (controller == 'radiological') {
      this.radiologicalArrayView.push(value);
      this.form.controls['radiological'].setValue(this.radiologicalArrayView);
    }
    if (controller == 'planning') {
      this.planningArrayView.push(value);
      this.form.controls['planning'].setValue(this.planningArrayView);
    }
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();

        reader.onload = (event) => {
          this.urls.push(reader.result);

        };
        console.log(this.urls);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
