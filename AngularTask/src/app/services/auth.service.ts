import { Injectable } from '@angular/core';
import { ILogin, IRegistration } from '../interface/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private userData = {
    usersKey: 'users',
    tokenKey: 'token',
  };

  constructor(private router: Router) {}

  public registerUser(user: IRegistration): void {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
    localStorage.setItem(this.userData.tokenKey, Math.random().toString());
    this.router.navigate(['posts']);
  }

  public loginUser(user: ILogin): boolean {
    const users = this.getUsers();
    const matchingUser = users.find(
      (u) => u.userName === user.userName && u.password === user.password
    );

    if (matchingUser) {
      localStorage.getItem(this.userData.usersKey);
      localStorage.setItem(this.userData.tokenKey, Math.random().toString());
      return true;
    }

    return false;
  }

  public logoutUser(): void {
    const confirmation = confirm('Do you want to logout?');
    if (confirmation) {
      localStorage.removeItem(this.userData.tokenKey);
      this.router.navigate(['auth']);
    }
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem(this.userData.tokenKey);
  }
  private getUsers(): IRegistration[] {
    const usersData = localStorage.getItem(this.userData.usersKey);
    return usersData ? JSON.parse(usersData) : [];
  }

  private saveUsers(users: IRegistration[]): void {
    localStorage.setItem(this.userData.usersKey, JSON.stringify(users));
  }

  public getToken(): string | null {
    return localStorage.getItem(this.userData.tokenKey);
  }
}
