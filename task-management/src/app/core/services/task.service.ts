import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Task } from './../dtos/task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<{ tasks: Task[] }>('./../../../assets/stub-json/tasks.json')
      .pipe(map(tasks => {
        return tasks.tasks;
      }));
  }

  addTask(task: Task) {
    console.log(task);
  }
}
