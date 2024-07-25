import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  private mockUsers = [
    { email: 'ramona@gmail.com', password: '1234567890123', token: 'mockToken' }
  ];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/login') && req.method === 'POST') {
      const user = this.mockUsers.find(u => u.email === req.body.email && u.password === req.body.password);
      if (user) {
        const mockResponse = new HttpResponse({
          status: 200,
          body: { token: user.token }
        });
        return of(mockResponse);
      } else {
        const mockResponse = new HttpResponse({
          status: 401,
          body: { error: 'Invalid email or password' }
        });
        return of(mockResponse);
      }
    }

    if (req.url.endsWith('/register') && req.method === 'POST') {
      this.mockUsers.push({ ...req.body, token: 'mockToken' });
      const mockResponse = new HttpResponse({
        status: 200,
        body: { message: 'User registered successfully' }
      });
      return of(mockResponse);
    }

    return next.handle(req);
  }
}

