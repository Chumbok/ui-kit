import {EventEmitter, Injectable} from '@angular/core';

import {FlashMessage} from '../model/flash-message';

@Injectable()
export class FlashMessageService {

  showFlashMessageEvent: EventEmitter<FlashMessage> = new EventEmitter<FlashMessage>();

  showFlashMessage(flashMessage: FlashMessage) {
    this.showFlashMessageEvent.emit(flashMessage);
  }

}
