import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanAccess {
  canAccess(): boolean | Observable<boolean> | Promise<boolean> | UrlTree;
}
