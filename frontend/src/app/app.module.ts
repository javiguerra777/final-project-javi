import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { RegistrationModule } from './features/registration/registration.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProjectComponent } from './features/project/project.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProjectItemComponent } from './features/project/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    ProjectComponent,
    NotFoundComponent,
    ProjectItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RegistrationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
