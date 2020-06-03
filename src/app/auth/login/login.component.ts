import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from "rxjs/operators";
import { login } from '../auth.actions';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService, private router: Router) {
      this.form = this.fb.group({
          email: ['test1404@gmail.com', [Validators.required]],
          password: ['test', [Validators.required]]
      });
  }

  login() {
    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .pipe(
        tap(user => {
          this.store.dispatch(login({user}));
          this.router.navigateByUrl('/feature');
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }
}
