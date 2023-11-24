import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, EMPTY } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  tasks: Observable<any> = EMPTY;
  projectId: number = 0;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    })
    this.tasks = this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        return this.tasksService.getTasksByProjectId(id);
      })
    );
  }

}
