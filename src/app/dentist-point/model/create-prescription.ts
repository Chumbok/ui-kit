import {Pharmacies} from './create-medicine';
import {ChiefComplains} from './chief-complain';
import {OnExaminations} from './on-examination';
import {Diagnosises} from './on-diagonsis';

export class CreatePrescription {
  patientId?: string;
  appointmentId?: string;
  templateName?: string;
  chiefComplain?: Array<ChiefComplains> = [];
  complain?: Array<String>;

  onExaminations?: Array<OnExaminations> = [];
  diagnosis?: Array<Diagnosises> = [];
  createMedicinePrescription: Array<Pharmacies> = [];
}
