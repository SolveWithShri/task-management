import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerShellRoutingModule } from './inner-shell-routing.module';
import { InnerShellComponent } from './components/inner-shell/inner-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [InnerShellComponent, HeaderComponent, SideNavBarComponent],
  imports: [
    CommonModule,
    InnerShellRoutingModule
  ]
})
export class InnerShellModule { }
