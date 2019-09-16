import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';

import { TaskStoreService } from './../../../core/services/task-store.service';
import { Task } from './../../../core/dtos/task.dto';
import { LoaderService } from './../../../core/services/loader.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskTableComponent implements OnChanges {

  @Input()
  header: string;

  @Input()
  isTaskStatusChangeAllowed: boolean;

  @Input()
  tasks: Task[] = [];

  readonly changeStatusColumnField = 'changeStatus';

  columnSchema = [
    { field: 'text', header: 'Name' },
    { field: 'creator', header: 'Creator' },
    { field: 'isCompleted', header: 'Completed' },
    { field: 'start', header: 'Start Date' },
    { field: 'end', header: 'End Date' }
  ];

  creatorList: SelectItem[] = [];

  constructor(private taskStoreService: TaskStoreService, private loaderService: LoaderService, private messageService: MessageService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      this.updateCreatorListForColumnDropDown();
    }

    if (changes['isTaskStatusChangeAllowed'] && changes['isTaskStatusChangeAllowed'].currentValue) {
      this.columnSchema.push({ field: this.changeStatusColumnField, header: 'Change status' });
    }
  }

  toChangeTaskStatus(task: Task) {
    this.loaderService.showLoader();

    // Note - Just to provide delay of API call ;)
    setTimeout(() => {
      this.taskStoreService.changeCompletedStatus(task.id, task.isCompleted);
      this.loaderService.hideLoader();
      this.messageService.add({
        key: 'change-completed-status',
        severity: 'success',
        summary: 'Tasks: ',
        detail: 'Task status changed.'
      });
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
