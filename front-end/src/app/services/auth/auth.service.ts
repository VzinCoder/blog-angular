import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/auth'
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<any>{
    const body = {email,password}
    return this.http.post(`${this.url}/login`,body)
  }
}
