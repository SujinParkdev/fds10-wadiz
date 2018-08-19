import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, switchMap, shareReplay } from 'rxjs/operators';

import { Token } from '../models/token';
import { User } from '../models/user';

// import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';


import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  URL = `${environment.apiUrl}/auth`;
  TOKEN_NAME = environment.tokenName;
  userId: string;
  helper: JwtHelperService;

  constructor(
    private http: HttpClient
    ) {
      this.helper = new JwtHelperService();
    }

  signin(credential: User): Observable<Token> {
    return this.http.post<Token>(`${this.URL}/signin`, credential)
      .pipe(
        tap(res => this.setToken(res.token)),
        shareReplay()
      );
  }

  signout(): void {
    this.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  // 토큰으로부터 사용자 아이디 취득
  getUserid(): string {
    // console.log(this.getDecodeToken());
    return this.getDecodeToken().userid;
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

  /*
  The JwtHelper class has several useful methods that can be utilized in your components:

  decodeToken
  getTokenExpirationDate
  isTokenExpired

  // npm install angular2-jwt ==>
  npm install @auth0/angular-jwt
  https://github.com/auth0/angular2-jwt
  */

  // token 유효 기간 체크
  isTokenExpired(token: string) {
    // return this.jwtHelper.isTokenExpired(token);
    return this.helper.isTokenExpired(token);
  }

  // 토큰으로부터 사용자 정보 취득
  getDecodeToken() {
    // return this.jwtHelper.decodeToken(this.getToken());
    return this.helper.decodeToken(this.getToken());
  }
}
