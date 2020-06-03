import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{
  path: 'feature',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
