import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {tap, map, take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CanUpdateGuard implements CanActivate {
  constructor(private auth: AuthService)
  {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      map(user => user && this.auth.canEdit(user) ? true : false),
      tap(canEdit => {
        if(!canEdit){
          console.error('Access Denied - Admin only')
      }
    })
    );
  }
}
