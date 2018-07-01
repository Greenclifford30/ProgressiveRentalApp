import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {tap, map, take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CanViewGuard implements CanActivate {
  constructor(private auth: AuthService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      map(user => user && this.auth.canView(user) ? true : false),
      tap(canView => {
        if(!canView){
          console.error('Access Denied - no permision to view');
      }
    })
    );
  }
}
