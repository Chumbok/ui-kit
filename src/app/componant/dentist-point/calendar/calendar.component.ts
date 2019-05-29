import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {isSameDay, isSameMonth} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';
import {AppointmentService} from '../../../service/appointment.service';

import {Router} from '@angular/router';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  constructor(private modal: NgbModal, private appointmentService: AppointmentService, private router: Router) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentList().subscribe(res => {

      res['items'].forEach((appointment) => {

        var timeEpisode = new Date(appointment.startDateTime);

        this.events.push({
          id: appointment.attendees[1].id,
          start: new Date(appointment.startDateTime),
          end: new Date(appointment.endDateTime),
          title: 'Appointment with  ' + appointment.attendees[1].name + '\n' + 'at\n' + timeEpisode.toLocaleTimeString('en-GB'),
          color: colors.blue,
          actions: this.actions,
          allDay: false,
        });
      });

      this.refresh.next();
    });
  }

  @ViewChild('modalContent', { static: false }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.router.navigate(['doctors/create-prescription'], {queryParams: {patientId: event.id}});
  }

  onCreareAppointment() {
    this.router.navigate(['patient/create-appointment']);

  }
}
