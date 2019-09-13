
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { TaskStoreService } from './../../../core/services/task-store.service';
import { Task } from './../../../core/dtos/task.dto';
import { LoaderService } from './../../../core/services/loader.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnChanges {

  @Input()
  header: string;

  @Input()
  isTaskStatusChangeAllowed: boolean;

  @Input()
  tasks: Task[] = [];

  columnSchema = [
    { field: 'text', header: 'Name' },
    { field: 'creator', header: 'Creator' },
    { field: 'isCompleted', header: 'Completed' },
    { field: 'start', header: 'Start Date' },
    { field: 'end', header: 'End Date' }
  ];

  creatorList: SelectItem[] = [];

  constructor(private taskStoreService: TaskStoreService, private loaderService: LoaderService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      this.updateCreatorListForColumnDropDown();
    }
  }

  toChangeTaskStatus(task: Task) {
    this.loaderService.showLoader();

    // Note - Just to provide delay of API call ;)
    setTimeout(() => {
      this.taskStoreService.setCompleted(task.id, task.isCompleted);
      this.loaderService.hideLoader();
    }, 2000);
  }

  private updateCreatorListForColumnDropDown() {
    this.creatorList = Array.from(new Set(this.tasks.map(task => task.creator)))
      .map(creator => {
        return {
          label: creator,
          value: creator
        };
      });
  }
}
