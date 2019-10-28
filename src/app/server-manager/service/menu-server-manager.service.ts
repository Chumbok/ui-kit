import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Menu, MenuItem} from '../../model/menu';
import {MenuService} from '../../service/menu.service';

@Injectable()
export class MenuServerManagerService implements MenuService {

  menus: Menu[];

  constructor() {

    const menuItem1: MenuItem = new MenuItem();
    menuItem1.iconCssClass = 'fa fa-key fa-fw';
    menuItem1.routerLink = '/init-master-key';
    menuItem1.text = 'Init Master Key';

    const menuItem2: MenuItem = new MenuItem();
    menuItem2.iconCssClass = 'fa fa-database fa-fw';
    menuItem2.routerLink = '/db-connection-list';
    menuItem2.text = 'DB Connection List';

    const menuItem3: MenuItem = new MenuItem();
    menuItem3.iconCssClass = 'fa fa-keyboard fa-fw';
    menuItem3.routerLink = '/ssh-connection-list';
    menuItem3.text = 'SSH Connection List';

    const menuItem4: MenuItem = new MenuItem();
    menuItem4.iconCssClass = 'fa fa-box fa-fw';
    menuItem4.routerLink = '/db-backup-job-list';
    menuItem4.text = 'DB Backup Job List';

    const menuItem5: MenuItem = new MenuItem();
    menuItem5.iconCssClass = 'fa fa-hdd fa-fw';
    menuItem5.routerLink = '/file-backup-job-list';
    menuItem5.text = 'File Backup List';

    const menuItem6: MenuItem = new MenuItem();
    menuItem6.iconCssClass = 'fa fa-bell fa-fw';
    menuItem6.routerLink = '/notification-list';
    menuItem6.text = 'Notification List';

    const menu = new Menu();
    menu.id = '#servermanager';
    menu.title = 'Server Manager';
    menu.iconCssClass = 'fa fa-cat fa-fw';
    menu.menuItems = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6];

    this.menus = [menu];
  }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }
}
