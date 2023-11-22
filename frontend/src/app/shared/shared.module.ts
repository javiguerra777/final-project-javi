import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { RegistrationNavbarComponent } from './registration-navbar/registration-navbar.component';


@NgModule({
  declarations: [
    RegistrationNavbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    RegistrationNavbarComponent,
  ]
})
export class SharedModule { }
