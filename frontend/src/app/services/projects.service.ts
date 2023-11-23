import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseApiUrl } from 'src/environments/environment.api';
import { shareReplay, Observable, tap, BehaviorSubject, finalize, EMPTY } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

type NewProject = {
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private loading = new BehaviorSubject<boolean>(false);
  private projectsData: Observable<any> = EMPTY;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    ) { }
    getProjects() {
      if (this.projectsData === EMPTY) {
        this.loading.next(true);
        this.projectsData = this.http.get(getBaseApiUrl() + '/api/projects',  this.getHeaders())
        .pipe(
          shareReplay(1), // Cache the response
          finalize(() => this.loading.next(false))
        );
      }
      return this.projectsData;
    }
    createNewProject(data: NewProject) {
      return this.http.post(getBaseApiUrl() + '/api/projects', data,  this.getHeaders())
      .pipe(
        tap(() => this.projectsData = this.fetchProjects()),
        finalize(() => this.loading.next(false))
      );
    }
    private fetchProjects() {
      return this.http.get(getBaseApiUrl() + '/api/projects', this.getHeaders())
      .pipe(
        shareReplay(1), // Cache the response
        finalize(() => this.loading.next(false))
      );
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
