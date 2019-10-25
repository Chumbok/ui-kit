import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class AppointmentService {

  abstract getFreeTimeSlots(selectedDate: string): Observable<any>;

  abstract getDoctorChamberList(selectedDate: string): Observable<any>;

  abstract getDoctorList(): Observable<any>;

  abstract getAppointmentDetails(): Observable<any>;

  abstract createAppointment(phoneNumber: string,
                             patientName: string,
                             address: string,
                             date: string,
                             age: string,
                             bloodGroup: string,
                             doctorName: string,
                             doctorChamber: string,
                             timeSlot: string): Observable<any>;

  abstract getAppointmentList(): Observable<any>;


  abstract createAppointmentByPatient(
    date: string,
    doctorName: string,
    doctorChamber: string,
    timeSlot: string): Observable<any>;


  abstract getAppointmentListByDoctorId(): Observable<any>;

  abstract getAppointmentListByLoggedInPatient(): Observable<any>;

  abstract deleteAppointment(appointmentId: string): Observable<any>;
}
