import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, firstValueFrom, Observable} from 'rxjs';
import { User } from '../../shared/models/user';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.API_URL;
  http = inject(HttpClient)

  register (userData:any):Observable<any>{
    return this.http.post(`${this.url}`,userData)
    
  }
  
  saveToken(token:string):void{
    sessionStorage.setItem('authToken',token);
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

login(user:User){
    this.http.post<User>(`${this.url}/login`,user).pipe(catchError(e=>of(e)));
  }
}
