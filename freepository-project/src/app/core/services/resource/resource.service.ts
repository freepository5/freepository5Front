import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Resource } from '../../../shared/models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private apiUrl = environment.apiUrl+"/resource";

  private userService = inject(HttpClient);
  
  
  getAllResource():Observable<Resource[]>{
    return this.userService.get<Resource[]>(this.apiUrl);
  }

  getResourceById(id:string){
    console.log(id)
    return this.userService.get<Resource>(`${this.apiUrl}/${id}`)
  }

  getResourcesByModuleId(id:number){
    console.log(id)
    return this.userService.get<Resource>(`${this.apiUrl}/?moduleId=${id}`)
  }

  addResource(resource: Resource): Observable<Resource> {
    console.log(resource)
    return this.userService.post<Resource>(this.apiUrl, resource);
  }
}
