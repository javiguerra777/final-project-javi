import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  key = 'project-management-app';
  constructor() { }
  getData(): any {
    const item = localStorage.getItem(this.key);
    return JSON.parse(item || '');
  }
  registerData(data: any): void {
    const parsedData = JSON.stringify(data);
    localStorage.setItem(this.key, parsedData);
  }
  clearData(): void {
    localStorage.removeItem(this.key);
  }
}
