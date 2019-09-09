import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from './../../../../shared/shared.module';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, AddTaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
