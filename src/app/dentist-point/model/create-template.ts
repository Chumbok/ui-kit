import {Pharmacies} from './create-medicine';

export class CreateTemplate {
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
  createMedicinePrescription: Array<Pharmacies> = [];

}
