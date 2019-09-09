import { Component, Input } from '@angular/core';

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
  tasks: Task[] = [];

  columnSchema = [
    { field: 'text', header: 'Name' },
    { field: 'creator', header: 'Creator' },
    { field: 'isCompleted', header: 'Completed' },
    { field: 'start', header: 'Start Date' },
    { field: 'end', header: 'End Date' }
  ];
}
