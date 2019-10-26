import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html'
})
export class TemplateSidenavComponent {

  constructor(private modal: NgbModal, private router: Router) {
  }
}

