import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { User } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<{ users: User[] }>('./../../../assets/stub-json/users.json')
      .pipe(map(user => {
        return user.users;
      }));
  }
}
