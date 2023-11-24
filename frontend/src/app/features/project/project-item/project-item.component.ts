import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import type { OrganizedTask } from 'src/app/models/task.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() task: OrganizedTask = {
    name: '',
    id: 0,
    data: [],
  };
  @Input() projectId: number = 0;
  taskForm = new FormGroup({
    task: new FormControl(''),
  });

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
  }
  submitTask() {
    const payload = {
      id: this.projectId,
      data: {
        name: this.taskForm.value.task,
        status: this.task.name,
      },
    };
    this.tasksService.createNewTask(payload).subscribe({
      next: (data: any) => {
        console.log(data);
        this.task.data.push(data);
      },
      error: (error) => console.error(error),
    });
   this.taskForm.reset();
  }
}
