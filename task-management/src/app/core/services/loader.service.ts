import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  readonly showLoader$ = new BehaviorSubject<boolean>(false);

  showLoader() {
    this.showLoader$.next(true);
  }

  hideLoader() {
    this.showLoader$.next(false);
  }
}
