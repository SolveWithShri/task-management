import { Component } from '@angular/core';

import { NavLinkMetaData } from './../../../../core/dtos/nav-link-meta-data';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {

  navLinkConfig: NavLinkMetaData[] = [
    {
      header: 'Home',
      iconClass: ' fa fa-home fa-2x',
      link: ['/home']
    },
    {
      header: 'Tasks',
      iconClass: ' fa fa-tasks fa-2x',
      link: ['/tasks']
    }
  ];
}
