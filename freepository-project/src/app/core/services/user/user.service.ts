import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 url = 'http://localhost:3000/users'
 loginUrl = 'http://localhost:3000/users/login'
 private http = inject(HttpClient);

 login(credentials: { email : string, password: string}): Observable<any> {
  return this.http.post<any>(`${this.loginUrl}`, credentials)
  .pipe(
    tap(response=>{
      console.log(response)
      sessionStorage.setItem('token', response.accessToken);

    }),
    catchError(error=>{
      console.error('Error:', error);
      throw error;
    })
  );
 }

addUser(user:User): Observable<User>{
 console.log(user);
   return this.http.post<User>(this.url,user);
 }


}
