import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login/login.component';

import { AuthReducer } from './auth.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    StoreModule.forFeature('auth', AuthReducer),
  ]
})
export class AuthModule { }
