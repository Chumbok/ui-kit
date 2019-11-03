import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Menu} from '../../model/menu';
import {MenuService} from '../../service/menu.service';

@Injectable()
export class MenuUaaService implements MenuService {

  menus: Menu[];

  constructor() {

    const menu1 = new Menu();
    menu1.id = '#usermanagement';
    menu1.title = 'User Management';
    menu1.iconCssClass = 'fas fa-user-astronaut fa-fw';
    menu1.routerLink = '/uaa/orgs';
    menu1.menuItems = [];

    const menu2 = new Menu();
    menu2.id = '#settings';
    menu2.title = 'Settings';
    menu2.iconCssClass = 'fa fa-cog fa-fw';
    menu2.routerLink = '/settings';
    menu2.menuItems = [];

    this.menus = [menu1, menu2];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}
