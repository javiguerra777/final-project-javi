import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { RegistrationNavbarComponent } from './registration-navbar/registration-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    RegistrationNavbarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    RegistrationNavbarComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
