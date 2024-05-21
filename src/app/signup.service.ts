// src/app/signup.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:3000/signup'; // Your backend endpoint

  constructor(private http: HttpClient) {}

  signup(user: { username: string; password: string; email: string }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
