import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { Token } from '../interface/token';
import { User } from '../interface/user';

import { environment } from '../../../environments/environment';

interface UserInfo {
  pk?: number;
  username?: string;
  nickname?: string;
  img_profile?: string;
  like_products?: any[];
  funding_set?: any[];
  new_password?: string;
  check_password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  TOKEN_NAME = environment.tokenName;
  apiUrl = environment.usersUrl;
  userId: string;
  isLogin: boolean;
  userInfo: UserInfo;

  constructor(
    private http: HttpClient
  ) {
    this.isAuthenticated();
  }

  signup(payload: User): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.apiUrl}/signup/`, payload);
  }

  signin(payload: User): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/signin/`, payload)
      .pipe(
        tap(res => {
          this.setToken(res.token);
        }),
        shareReplay()
      );
  }

  changeInfo(payload: User): Observable<UserInfo> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };
    return this.http.patch<User>(`${this.apiUrl}/change-info/`, payload, httpOptions);
  }

  deleteUser(payload: User): Observable<User> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };
    return this.http.post<User>(`${this.apiUrl}/change-info/`, payload, httpOptions);
  }

  signout(): void {
    this.removeToken();
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      this.getUserid(token);
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  // 토큰으로부터 사용자 아이디 취득
  getUserid(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };
    // console.log(httpOptions);
    this.http.get<UserInfo>(`${this.apiUrl}/myinfo/`, httpOptions)
      .subscribe(
        res => {
          this.userInfo = res;
          console.log(this.userInfo);
        },
        error => {
          // console.log(error);
          this.signout();
          this.isLogin = false;
        }
      );
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
    this.isLogin = true;
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
    this.isLogin = false;
  }
}
