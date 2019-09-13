import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskStoreService } from './../../../../../../core/services/task-store.service';
import { Task } from './../../../../../../core/dtos/task.dto';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoaderService } from './../../../../../../core/services/loader.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private router: Router, private taskStoreService: TaskStoreService,
    private messageService: MessageService, private loaderService: LoaderService) { }

  addTask(task: Task) {
    this.loaderService.showLoader();
    this.taskStoreService.addTask(task);
    this.messageService.add({ key: 'task-added', severity: 'success', summary: 'Tasks: ', detail: 'Added successfully!' });
  }

  navigateToTaskListPage() {
    this.router.navigate(['/tasks']);
    this.loaderService.hideLoader();
  }
}
