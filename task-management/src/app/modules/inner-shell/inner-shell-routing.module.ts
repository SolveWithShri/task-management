import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnerShellComponent } from './components/inner-shell/inner-shell.component';

const routes: Routes = [
  {
    path: '',
    component: InnerShellComponent,
    children: [
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'tasks',
        loadChildren: './modules/tasks/tasks.module#TasksModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerShellRoutingModule { }
