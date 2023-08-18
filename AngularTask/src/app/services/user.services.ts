import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userKey = 'currentUser';

  registerUser(user: IUser): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): IUser | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  logoutUser(): void {
    localStorage.removeItem(this.userKey);
  }
}
