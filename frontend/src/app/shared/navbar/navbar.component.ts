import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    ) { }

  ngOnInit(): void {
  }
  logout() {
    const confirmed = confirm('Are you sure you want to logout?');
    if(confirmed) {
      this.localStorageService.clearData();
      this.router.navigate(['']);
    }
  }

}
