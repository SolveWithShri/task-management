import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule
  ],
  exports: [TaskTableComponent]
})
export class SharedModule { }
