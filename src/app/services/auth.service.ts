import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/api';
  token = "";
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.uri+'/authenticate',{email: email,password: password});
  }
}
