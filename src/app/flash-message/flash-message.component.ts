import {Component, OnInit} from '@angular/core';
import {FlashMessageService} from '../service/flash-message.service';
import {FlashMessage} from '../model/flash-message';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css'],
  animations: [
    trigger('alertState', [
      state('visible', style({
        opacity: 1,
        display: 'block'
      })),
      state('invisible', style({
        opacity: 0,
        display: 'none'
      })),
      transition('visible => invisible', animate('500ms ease-in')),
      transition('invisible => visible', animate('0ms linear'))
    ])
  ]
})
export class FlashMessageComponent implements OnInit {

  flashMessage: FlashMessage;
  alertVisibility = 'invisible';

  constructor(private flashMessageService: FlashMessageService) {
  }

  ngOnInit() {
    this.flashMessage = new FlashMessage();

    this.flashMessageService.showFlashMessageEvent.subscribe((flashMessage: FlashMessage) => {


      this.alertVisibility = 'visible';
      flashMessage.type = flashMessage.type ? flashMessage.type : 'info';
      flashMessage.timeout = flashMessage.timeout === undefined ? 10000 : flashMessage.timeout;

      this.flashMessage = flashMessage;
      if (flashMessage.timeout) {
        setTimeout(() => {
          this.alertVisibility = 'invisible';
        }, flashMessage.timeout);
      }
    });
  }

  onBtnCloseClick(evt) {
    evt.preventDefault();
    this.alertVisibility = 'invisible';
  }

}
