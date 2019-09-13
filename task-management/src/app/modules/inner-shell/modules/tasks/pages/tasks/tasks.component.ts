import { Component, OnInit } from '@angular/core';

import { TaskStoreService } from './../../../../../../core/services/task-store.service';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  allTasks: Task[] = [];

  constructor(private taskStoreService: TaskStoreService) { }

  ngOnInit(): void {
    this.fetchAllTasks();
  }

  private fetchAllTasks() {
    this.taskStoreService.tasks$.subscribe((tasks) => {
      this.allTasks = tasks;
    });
  }
}
