import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.authService.isLoggedIn()) {
        return true;
      }else {
        this.router.navigate(['/register']);
        return false;
      }
    }
}
