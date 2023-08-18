import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import { ILogin, IRegistration } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly TOKEN_KEY = 'token';
  private secretKey = 'my_secret_key';

  constructor(private http: HttpClient) {}

  register(user: IRegistration): void {
    const token = jwt.sign({ user }, this.secretKey);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  login(user: ILogin): void {
    const token = jwt.sign({ user }, this.secretKey);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      try {
        jwt.verify(token, this.secretKey);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
}
