import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationsRoutingModule { }