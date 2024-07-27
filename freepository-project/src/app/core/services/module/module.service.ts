import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { Module } from '../../../shared/models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(`${this.apiUrl}/modules`, module).pipe(
      catchError(this.handleError)
    );
  }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/modules`).pipe(
      catchError(this.handleError)
    );
  }

  upploadResources(moduleId: string, resources: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/modules/{moduleId}/resources`, resources).pipe(
      catchError(this.handleError)
    );
  }

  upploadRoadmap(moduleId: string, roadmap: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/modules/{moduleId}/roadmap`, roadmap).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError(() => new Error('Algo salió mal; por favor, inténtalo nuevamente más tarde.'));
  }
}
