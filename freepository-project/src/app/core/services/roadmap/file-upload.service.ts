import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private http = inject(HttpClient);
  private uploadUrl = 'http://localhost:3000/roadmap'; 

  uploadFile(file: File): Observable<any> {
    // const formData = new FormData();
    // formData.append('file', file);

    const formData = {
      "file": file
    }
    console.log(formData)

    return this.http.post(this.uploadUrl, formData);
  }
}

