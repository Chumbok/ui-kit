import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class AppointmentService {

  abstract getFreeTimeSlots(selectedDate: string): Observable<any>;

  abstract getAppointmentDetails(): Observable<any>;

  abstract createAppointment(phoneNumber: string,
                             patientName: string,
                             address: string,
                             date: string,
                             timeSlot: string): Observable<any>;

  abstract getAppointmentList(): Observable<any>;

  abstract getAppointmentListByDoctorId(): Observable<any>;

  abstract deleteAppointment(appointmentId: string): Observable<any>;
}
