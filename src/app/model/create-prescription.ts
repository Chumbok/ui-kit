import {CreateDrug} from './create-medicine';

export class CreatePrescription {
  patientId?: string;
  templateName?: string;
  chiefComplain?: string;
  complain?: string;
  parameters?: string;
  remarks?: string;
  dentalHistory?: string;
  vaccinationHistory?: string;
  investigation?: string;
  radiological?: string;
  planning?: string;
  createMedicinePrescription: Array<CreateDrug> = [];
}
