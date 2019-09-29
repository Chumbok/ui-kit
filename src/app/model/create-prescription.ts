import {CreateDrug} from './create-medicine';
import {ChiefComplain} from "./chief-complain";
import {OnExamination} from "./on-examination";
import {Diagnosis} from "./on-diagonsis";

export class CreatePrescription {
  patientId?: string;
  appointmentId?: string;
  templateName?: string;
  chiefComplain?: Array<ChiefComplain> = [];
  complain?: Array<String>;

  onExaminations?: Array<OnExamination> = [];
  diagnosis?: Array<Diagnosis> = [];
  createMedicinePrescription: Array<CreateDrug> = [];
}
