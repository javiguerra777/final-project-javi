import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseApiUrl } from '../../environments/environment.api'

type Login = {
  email: string;
  password: string;
};
type Register = {
  name: string;
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl = getBaseApiUrl();
  constructor(private http: HttpClient) { }
  loginUser(data: Login) {
    return this.http.post( this.baseUrl + '/api/login', data);
  }
  registerUser(data: Register) {
    return this.http.post( this.baseUrl + '/api/register', data);
  }
}
