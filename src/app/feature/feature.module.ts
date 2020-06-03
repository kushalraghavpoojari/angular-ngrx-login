import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature1/feature.component';

@NgModule({
  declarations: [
      FeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureComponent }]),
  ]
})
export class FeatureModule { }
