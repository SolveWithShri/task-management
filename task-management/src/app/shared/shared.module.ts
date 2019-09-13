import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './modules/prime-ng,module';

import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule, PrimeNgModule
  ],
  exports: [PrimeNgModule, TaskTableComponent]
})
export class SharedModule { }
