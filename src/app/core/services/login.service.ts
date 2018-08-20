import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { Token } from '../interface/token';
import { User } from '../interface/user';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  TOKEN_NAME = environment.tokenName;
  apiUrl = environment.usersUrl;
  userId: string;

  constructor(
    private http: HttpClient
  ) { }

  signup(payload: User) {

  }

  signin(payload: User): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/signin`, payload)
      .pipe(
        tap(res => {
          this.setToken(res.token);
        }),
        shareReplay()
      );
  }

  signout(): void {
    this.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return false;
  }

  // 토큰으로부터 사용자 아이디 취득
  getUserid() {
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
}
