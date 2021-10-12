import { Injectable } from '@angular/core';
import { users } from './mock-user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    localStorage.setItem('Users', JSON.stringify(users));
  }

  public getUser(): User[] {
    return JSON.parse(localStorage.getItem('Users')) || [];
  }

  public saveUser(user: User): void {
    const oldItems = JSON.parse(localStorage.getItem('Users')) || [];
    oldItems.push(user);
    localStorage.setItem('Users', JSON.stringify(oldItems));
  }

}
