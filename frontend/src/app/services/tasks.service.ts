import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseApiUrl } from '../../environments/environment.api'
import { LocalStorageService } from './local-storage.service';

type TaskData = {
  id: number;
  data: {
    name: string;
    status: string;
  }
};
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl = getBaseApiUrl();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  getTasksByProjectId(id: number) {
    return this.http.get(this.baseUrl + '/api/tasks/' + id, this.getHeaders());
  }
  createNewTask({ id, data }: TaskData) {
    return this.http.post(this.baseUrl + '/api/tasks/' + id, data, this.getHeaders());
  }
  updateTask({ id, data }: TaskData) {
    return this.http.patch(this.baseUrl + '/api/tasks/' + id, data, this.getHeaders());
  }
  deleteTask(id: number) {
    return this.http.delete(this.baseUrl + '/api/tasks/' + id, this.getHeaders());
  }

  private getHeaders() {
    const localStorageState = this.localStorageService.getData();
    const token = localStorageState.token;
    return {
      headers: {
        Authorization: token,
      }
    }
  }
}
