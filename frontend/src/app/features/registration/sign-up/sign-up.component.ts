import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm =  new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const payload = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };
    this.registrationService.registerUser(payload).subscribe({
      next: (data: any) => {
        this.localStorageService.registerData(data);
        this.router.navigate(['my/projects/dashboard']);
      },
      error: (error) => console.error(error),
    });
  }
}
