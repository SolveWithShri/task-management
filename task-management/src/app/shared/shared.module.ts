import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule
  ],
  exports: [TaskTableComponent, CheckboxModule, CalendarModule, DropdownModule, ButtonModule]
})
export class SharedModule { }
