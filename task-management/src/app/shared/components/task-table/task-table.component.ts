import { Component, Input } from '@angular/core';

import { TaskStoreService } from './../../../core/services/task-store.service';
import { Task } from './../../../core/dtos/task.dto';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent {

  @Input()
  header: string;

  @Input()
  isTaskStatusChangeAllowed: boolean;

  @Input()
  tasks: Task[] = [];

  showLoader = false;

  columnSchema = [
    { field: 'text', header: 'Name' },
    { field: 'creator', header: 'Creator' },
    { field: 'isCompleted', header: 'Completed' },
    { field: 'start', header: 'Start Date' },
    { field: 'end', header: 'End Date' }
  ];

  constructor(private taskStoreService: TaskStoreService) { }

  toChangeTaskStatus(task: Task) {
    this.showLoader = true;

    // Note - Just to provide delay of API call ;)
    setTimeout(() => {
      this.taskStoreService.setCompleted(task.id, task.isCompleted);
      this.showLoader = false;
    }, 2000);
  }
}
