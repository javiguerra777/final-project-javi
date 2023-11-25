import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, EMPTY } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';
import type { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  tasks: Observable<any> = EMPTY;
  activeTask: Task | null = {
    "id": 8,
    "name": "finish app",
    "status": "todo",
    "projectId": 1,
    "userId": 1,
    "createdAt": "2023-11-24T08:14:18.000Z",
    "updatedAt": "2023-11-24T08:14:18.000Z"
};
  projectId: number = 0;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
      this.tasks = this.tasksService.tasks$;
      this.tasksService.getTasksByProjectId(this.projectId);
    });
  }

  onClearActiveTask(val: any) {
    this.activeTask = val;
  }
  onEditTask(val: any) {
    this.activeTask = val;
  }
}
