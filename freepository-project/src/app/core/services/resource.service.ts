import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResourceDetail } from '../../shared/models/resource-detail';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private apiUrl = environment.apiUrl;

  private userService = inject(HttpClient);
  
  
  getAllResource():Observable<ResourceDetail[]>{
    return this.userService.get<ResourceDetail[]>(this.apiUrl);
  }

  addResource(resource: ResourceDetail): Observable<ResourceDetail> {
    console.log(resource)
    return this.userService.post<ResourceDetail>(this.apiUrl, resource);
  }
}
