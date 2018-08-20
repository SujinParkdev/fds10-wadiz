import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }

  canActivate() {
    if (!this.loginService) {
      console.log('[LoginGuard]', this.loginService);
      this.router.navigate(['main']);
      return false;
    }
    return true;
  }
}
