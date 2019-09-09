import { Component, OnInit } from '@angular/core';

import { TaskService } from './../../../../../../core/services/task.service';
import { Task } from './../../../../../../core/dtos/task.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  globalTasks: Task[] = [];
  leaderTasks: Task[] = [];
  personalTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchAllTasks();
  }

  private fetchAllTasks() {
    this.taskService.getTasks()
      .subscribe((tasks = []) => {
        this.separateTasks(tasks);
      });
  }

  private separateTasks(allTasks: Task[] = []) {
    allTasks.forEach((task) => {
      if (task.isGlobal) {
        this.globalTasks.push(task);
      }
      if (task.isLeader) {
        this.leaderTasks.push(task);
      }
      if (!task.isGlobal && !task.isLeader) {
        this.personalTasks.push(task);
      }
    });
  }
}
