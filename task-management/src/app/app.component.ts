import { Component } from '@angular/core';

import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLoader = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader$.subscribe(showLoader => this.showLoader = showLoader);
  }
}
