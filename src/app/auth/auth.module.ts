import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ]
})
export class AuthModule { }
