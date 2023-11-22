import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'registration', loadChildren: () => import('./features/registrations-routing.module').then(m => m.RegistrationsRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
