import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceDetail } from '../../shared/models/resource-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  url = 'http://localhost:3000/resource';
  constructor(private http: HttpClient) {}

  addResource(resource: ResourceDetail): Observable<ResourceDetail> {
    console.log(resource)
    return this.http.post<ResourceDetail>(this.url, resource);


}
}
