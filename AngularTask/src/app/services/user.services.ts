import { Injectable } from '@angular/core';
import { ILogin, IRegistration } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userKey = 'currentUser';

  registerUser(user: IRegistration): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): ILogin | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  logoutUser(): void {
    localStorage.removeItem(this.userKey);
  }
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }
}
