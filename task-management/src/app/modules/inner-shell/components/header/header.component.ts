import { Component } from '@angular/core';

import { TaskStoreService } from './../../../../core/services/task-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public taskStoreService: TaskStoreService) { }
}
