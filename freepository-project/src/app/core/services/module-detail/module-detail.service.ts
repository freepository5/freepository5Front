import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleDetail } from '../../../shared/models/module-detail';

@Injectable({
  providedIn: 'root'
})
export class ModuleDetailService {

 private apiUrl = environment.apiUrl;
 private moduleService = inject(HttpClient);

 getModule():Observable<ModuleDetail[]>{
  return this.moduleService.get<ModuleDetail[]>(this.apiUrl);
 }

 getModuleById(id: string): Observable<ModuleDetail> {
  const url = `${this.apiUrl}/module/${id}`; 
  
  return this.moduleService.get<ModuleDetail>(url);
}


 addModule(module: ModuleDetail):Observable<ModuleDetail>{
  return this.moduleService.post<ModuleDetail>(this.apiUrl, module);
 }
}
