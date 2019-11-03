import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Pharmacies} from '../../../model/create-medicine';
import {PrescriptionService} from '../../../service/prescription.service';

@Component({
  selector: 'app-patient-view-medicine',
  templateUrl: './patient-view-medicine.component.html',
  styleUrls: ['./patient-view-medicine.component.css']
})

export class PatientViewMedicineComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  templateId: string;
  createMedicinePrescription: Array<Pharmacies> = [];
  chiefComplain: string = '';
  parameters: string = '';
  remarks: string = '';
  dentalHistory: string = '';
  vaccinationHistory: string = '';
  investigation: string = '';
  radiological: string = '';
  planning: string = '';

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

    this.prescriptionService1.getPatientPrescriptionView(selectedTemplateId).subscribe(res => {
      res.forEach((medicine) => {
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
