import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './auth.selectors';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/');
                }
            })
        )
    }
}