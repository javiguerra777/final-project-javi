import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProjectComponent } from './features/project/project.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'registration', loadChildren: () => import('./features/registration/registrations-routing.module').then(m => m.RegistrationsRoutingModule) },
  {path: 'my/projects/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'my/project/:id', component: ProjectComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
