import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Task } from '../dtos/task.dto';
import { TaskService } from './task.service';
import { map } from 'rxjs/internal/operators/map';

// Credit goes to : https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {

  private readonly _tasks = new BehaviorSubject<Task[]>([]);

  readonly tasks$ = this._tasks.asObservable();

  readonly myTasksCount$ = this._tasks.pipe(map((tasks) => tasks.filter(task => !task.isGlobal).length));

  readonly teamTasksCount$ = this._tasks.pipe(map((tasks) => tasks.filter(task => task.isGlobal).length));

  constructor(private taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe((tasks = []) => {
        this.setTasks(tasks);
      });
  }

  getTasks(): Task[] {
    return this._tasks.getValue();
  }

  addTask(task: Task) {
    this.setTasks([
      ...this.getTasks(),
      { id: this.taskService.getUniqueTaskId() + 1, ...task }
    ]);
  }

  setCompleted(id: number, isCompleted: boolean) {
    const tasks = this.getTasks();
    const currentTask = tasks.find(todo => todo.id === id);

    if (currentTask) {
      // we need to make a new copy of todos array, and the todo as well
      // remember, our state must always remain immutable
      // otherwise, on push change detection won't work, and won't update its view
      const index = tasks.indexOf(currentTask);

      tasks[index] = {
        ...currentTask,
        isCompleted
      };
      this.setTasks([...tasks]);
    }
  }

  private setTasks(val: Task[]) {
    this._tasks.next(val);
  }
}
