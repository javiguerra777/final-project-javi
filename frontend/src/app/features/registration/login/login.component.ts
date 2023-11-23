import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm =  new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router, 
    private registrationService: RegistrationService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.localStorageService.getData()
  }
  onSubmit() {
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.registrationService
    .loginUser(payload)
    .subscribe({
      next: (data: any) => {
        this.localStorageService.registerData(data);
        this.router.navigate(['my/projects/dashboard']);
      },
      error: (error) => console.error(error),
    });
  }
}
