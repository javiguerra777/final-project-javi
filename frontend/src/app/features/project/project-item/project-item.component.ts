import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
