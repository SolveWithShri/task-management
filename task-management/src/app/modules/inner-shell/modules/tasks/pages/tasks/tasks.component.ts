import { Component, OnInit } from '@angular/core';

import { TaskService } from './../../../../../../core/services/task.service';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  allTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchAllTasks();
  }

  private fetchAllTasks() {
    this.taskService.getTasks()
      .subscribe((tasks = []) => {
        this.allTasks = tasks;
      });
  }
}
