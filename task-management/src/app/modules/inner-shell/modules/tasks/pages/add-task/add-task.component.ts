import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskStoreService } from './../../../../../../core/services/task-store.service';
import { Task } from './../../../../../../core/dtos/task.dto';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private router: Router, private taskStoreService: TaskStoreService, private messageService: MessageService) { }

  addTask(task: Task) {
    this.taskStoreService.addTask(task);
    this.messageService.add({ key: 'task-added', severity: 'success', summary: 'Tasks: ', detail: 'Added successfully!' });
  }

  navigateToTaskListPage() {
    this.router.navigate(['/tasks']);
  }
}
