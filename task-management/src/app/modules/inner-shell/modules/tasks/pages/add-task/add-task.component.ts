import { Component } from '@angular/core';

import { TaskService } from './../../../../../../core/services/task.service';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TaskService) { }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }
}
