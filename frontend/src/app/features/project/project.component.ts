import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      name: 'todo',
      projects: [],
    },
    {
      name: 'in progress',
      projects: [],
    },
    {
      name: 'done',
      projects: [],
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
