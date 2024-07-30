import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../../../shared/models/user';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl.concat("/account")
  private http = inject(HttpClient)

  register (userData:any):Observable<any>{
    // return this.http.post('http://localhost:5256/api/account/register',userData)
    return this.http.post(`${this.apiUrl}/register`,userData) 
  }
  
  saveToken(token:string):void{
    sessionStorage.setItem('authToken',token);
  }

  saveUserId(userId:string):void{
    sessionStorage.setItem('userId', userId);
  }

  getToken(): string | null{
    return sessionStorage.getItem('authToken');
  }

isLoggedIn(): boolean {
  return !!this.getToken();
}

logout():void{
  sessionStorage.removeItem('authToken');
  // sessionStorage.removeItem('userId');
  }

  login(userData:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,userData)
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
