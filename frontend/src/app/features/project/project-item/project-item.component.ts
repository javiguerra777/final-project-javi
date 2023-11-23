import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type Project = {
  name: string;
  projects: any[];
}
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Project;
  taskForm = new FormGroup({
    task: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  submitTask() {
   this.project.projects.push(this.taskForm.value.task);
   this.taskForm.reset();
  }
}
