import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  key = 'project-management-app';
  constructor() { }
  getData(): string | any {
    const item = localStorage.getItem(this.key);
    if(item){
      const parsedItem = JSON.parse(item || '');
      return parsedItem;
    }
    return null;
  }
  registerData(data: any): void {
    const parsedData = JSON.stringify(data);
    localStorage.setItem(this.key, parsedData);
  }
  clearData(): void {
    localStorage.removeItem(this.key);
  }
}
