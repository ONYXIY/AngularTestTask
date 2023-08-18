import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth.service';
import { Router, UrlTree } from '@angular/router';
import { CanAccess } from '../interface/guard.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanAccess {

  constructor(private auth: AuthServiceService, private router: Router) {}

  canAccess(): boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth']);
    }
  }
}
