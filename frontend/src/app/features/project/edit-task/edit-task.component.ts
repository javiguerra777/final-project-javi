import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import type { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task = {
    id: 0,
    name: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    projectId: 0,
    userId: 0,
  };
  @Input() projectId: number = 0;
  @Output() setActiveTask = new EventEmitter<any>();
  editTaskForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });
  taskStatus = ['todo', 'in progress', 'complete']

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.editTaskForm.setValue({
      name: this.task.name,
      status: this.task.status,
    })
  }
  get formTaskStatus() {
    return this.editTaskForm.get('status')?.value;
  }
  isEqualToActiveFormStatus(val: string) {
    return this.formTaskStatus === val;
  }
  clearActiveTask() {
    this.setActiveTask.emit(null);
  }
  switchActiveStatus(status: string) {
    this.editTaskForm.patchValue({
      status: status,
    });
  }
  submitEditTask() {
    const payload = {
      projectId: this.projectId,
      id: this.task.id,
      data: this.editTaskForm.value,
    };
    this.tasksService.updateTask(payload).subscribe({
      next: () => {
        this.setActiveTask.emit(null);
      },
      error: (error) => console.error(error),
    });
  }
}
