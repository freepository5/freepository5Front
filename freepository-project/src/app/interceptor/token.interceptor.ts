import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { SessionStorageService } from '../core/services/session-storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionStorageService = inject(SessionStorageService);

  return next(req).pipe(
    tap((event: HttpEvent<any>)=>{
      if(event instanceof HttpResponse){
        sessionStorageService.setItem('token', event.body.accessToken);
      }

      return event;
    })
  )
};
