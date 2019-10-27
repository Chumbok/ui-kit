import {Injectable} from '@angular/core';
import {Menu} from '../model/menu';
import {Observable} from 'rxjs';

@Injectable()
export abstract class MenuService {
  abstract getMenus(): Observable<Menu[]>;
}
