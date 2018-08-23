import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }

  canActivate() {
    this.loginService.isAuthenticated();
    if (!this.loginService.isLogin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
