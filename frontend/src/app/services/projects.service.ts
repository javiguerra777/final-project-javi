import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseApiUrl } from 'src/environments/environment.api';
import { LocalStorageService } from './local-storage.service';

type NewProject = {
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    ) { }
    getProjects() {
      return this.http.get(getBaseApiUrl() + '/api/projects',  this.getHeaders());
    }
    createNewProject(data: NewProject) {
      return this.http.post(getBaseApiUrl() + '/api/projects', data,  this.getHeaders());
    }
    private getHeaders() {
      const localStorageState = this.localStorageService.getData();
      const token = localStorageState.token;
      return {
        headers: {
          Authorization: token,
        }
      };
    }
}
