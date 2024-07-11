import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:3000/users';

  constructor(private http:HttpClient) {}

  register (userData:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,userData)
    
  }
  
  saveToken(token:string):void{
    sessionStorage.setItem('authToken',token);

  }

  getToken(): string | null{
    return sessionStorage.getItem('authToken');
  }

isLoggedIn():boolean{
  return !!this.getToken();
}

logout():void{
  sessionStorage.removeItem('authToken');
  }
}
