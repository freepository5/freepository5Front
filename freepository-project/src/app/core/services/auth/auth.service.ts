import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../../shared/models/user';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl.concat("/account")

  constructor(private http:HttpClient) {}

  register (userData:any):Observable<any>{
    return this.http.post('http://localhost:5256/api/account/register',userData)
    // return this.http.post(`${this.apiUrl}/register`,userData)
    
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

  }

  login(userData:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,userData).pipe(
      map(response=>{
        return {...response,token:'holaa'};
      })

    );
}
}
