import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';
import { Resource } from '../../../shared/models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private apiUrl = `${environment.apiUrl}/resource`;
  private http = inject(HttpClient);

  getAllResource(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getResourceById(id: string): Observable<any> {
    console.log(id);
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getResourcesByModuleId(id: number): Observable<Resource> {
    console.log(id);
    return this.http.get<Resource>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addResource(resource: Resource): Observable<Resource> {
    console.log(resource);
    return this.http.post<Resource>(this.apiUrl, resource).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.status === 400) {
        errorMessage += `\nDetails: ${JSON.stringify(error.error)}`;
      }
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
