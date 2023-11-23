import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
type Project = {
  id: number;
  userId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  createProjectForm =  new FormGroup({
    title: new FormControl(''),
  });
  projects: Project[] = [];
  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    ) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
      },
      error: (error) => console.error(error),
    });
  }
  submitProject() {
    console.log(this.createProjectForm.value);
    this.router.navigate(['my/project/1']);
  }

}
