import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { Roadmap } from '../../../shared/models/roadmap';
import roadmaps from '../../../data/roadmap';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  roadmaps = signal<Roadmap[]>([])
//   file = signal('');
 
//   filterArray = computed(() =>
//     this.roadmaps().filter((roadmap) => roadmap.image.includes(this.file()))
// );

  getAllRoadmap(): Observable<any>{
    return this.http.get(`${this.apiUrl}/resources`);
  }

  // uploadFile(file: File): Observable<any> {
  //   const formData = {
  //     "file": file
  //   }
  //   return this.http.post(this.uploadUrl, formData);
  // }

  // async uploadFile(file: File): Promise<Roadmap> {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const result = await firstValueFrom(
  //       this.http.post<Roadmap>(this.uploadUrl, formData).pipe(
  //         catchError(e => {
  //           console.error('Error al subir el archivo', e);
  //           return of(e); // Devuelve el error en lugar de lanzar una excepción
  //         })
  //       )
  //     );
  //     return result;
  //   } catch (e) {
  //     console.error('Error en la llamada HTTP', e);
  //     throw e; // Re-lanza el error para manejarlo en el componente
  //   }
  // }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/resources`, formData);
  }

  addFile(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}



