import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'flush-message',
  templateUrl: './flush-message.component.html',
  styleUrls: ['./flush-message.component.css']
})
export class FlushMessageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  flushMessage: any;

  constructor() {
  }

  ngOnInit() {
    // this.subscription = this.alertService.getMessage().subscribe(message => {
    //   this.flushMessage = message;
    // });
    this.flushMessage = {};
    this.flushMessage.text = "hello!";
    this.flushMessage.type = 'success';
    //TODO: hide after 15sec
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
