import {CreateDrug} from "./create-medicine";

export class CreatePrescription {
  patientId?: string;
  chiefComplain?: string;
  complain?: string;
  parameters?: string;
  remarks?: string;
  dentalHistory?: string;
  vaccinationHistory?: string;
  investigation?: string;
  radiological?: string;
  planning?: string;
  prescriptionList: Array<CreateDrug> = [];
}
