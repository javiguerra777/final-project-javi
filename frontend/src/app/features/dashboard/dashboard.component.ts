import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    title: new FormControl('' ,[Validators.required, Validators.minLength(3)]),
  });
  projects: Project[] = [];
  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    ) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data: any) => {
        console.log(data);
        this.projects = data;
      },
      error: (error) => console.error(error),
    });
  }
  submitProject() {
    const payload = {
      title: this.createProjectForm.value.title,
    };
    this.projectsService.createNewProject(payload).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['my/project/' + data.id]);
      },
      error: (error) => console.error(error),
    });
  }

}
