import { createEffect, Actions, ofType } from '@ngrx/effects';
import { logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
    logout$ = createEffect(() => this.action$.pipe(
        ofType(logout),
        tap(action => {
            this.router.navigateByUrl('/');
        })
    ), { dispatch: false });

    constructor(private action$: Actions, private router: Router) {}
}