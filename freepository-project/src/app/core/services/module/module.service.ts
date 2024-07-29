import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Module } from '../../../shared/models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
private http = inject(HttpClient);
private apiUrl = environment.apiUrl;

addModule(module: Module): Observable<Module> {
  return this.http.post<Module>(`${this.apiUrl}/module`, module)
}

getModules(): Observable<Module[]> {
  return this.http.get<Module[]>(`${this.apiUrl}/module`)
}
  
}
