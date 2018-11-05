import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'template-head',
  templateUrl: './template-head.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TemplateHeadComponent {
  title = 'Business ONE';
}
