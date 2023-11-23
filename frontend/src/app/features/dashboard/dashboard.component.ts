import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  createProjectForm =  new FormGroup({
    title: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitProject() {
    console.log(this.createProjectForm.value);
    this.router.navigate(['my/project/1']);
  }

}
