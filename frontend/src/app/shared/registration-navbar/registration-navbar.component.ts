import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-navbar',
  templateUrl: './registration-navbar.component.html',
  styleUrls: ['./registration-navbar.component.scss']
})
export class RegistrationNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToPage(route: string){
    this.router.navigate([route]);
  }

}
