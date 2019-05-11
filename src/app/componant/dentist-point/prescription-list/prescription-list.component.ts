import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from '../../../service/prescription.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescription: any;
  prescriptionListin: Array<any>;
  prescriptionId: string;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  config: any;
  searchText;
  constructor(private prescriptionService: PrescriptionService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
    this.route.params.subscribe(params => {
      this.prescriptionId = params['id'];
    });
  }

  pageChange(newPage: number) {
    this.router.navigate(['doctors/prescription-list'], {queryParams: {page: newPage}});
    this.prescriptionService.getPrescriptionList(this.prescriptionId, newPage).subscribe(res => {
      this.prescription = res;
      this.prescriptionListin = res['items'];
      this.itemFrom = this.prescription.page + 1;
      this.itemTo = (this.prescription.page + 1) * this.prescription.size;
      this.totalElements = this.prescription.totalElements;
    });
  }

  ngOnInit() {
    this.pageChange(1);
  }

  onPrescriptionView(prescriptionId) {
    this.router.navigate(['doctors/'+'prescription/' + prescriptionId + '/prescription-view']);
  }


}
