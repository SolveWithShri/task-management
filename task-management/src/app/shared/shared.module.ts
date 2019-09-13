import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from './modules/prime-ng,module';

import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule, FormsModule, PrimeNgModule
  ],
  exports: [PrimeNgModule, TaskTableComponent]
})
export class SharedModule { }
