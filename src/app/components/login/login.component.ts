import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { User } from '../../core/interface/user';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { CreateElementService } from '../../core/services/create-element/create-element.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginError: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private createElementService: CreateElementService
  ) {
      if (loginService.isLogin) {
        this.router.navigate(['main', 'all']);
      }
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern(/(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        Validators.maxLength(17)
      ]]
    });
  }

  submitLogin() {
    this.createElementService.startLoading();
    this.loginService.signin(this.loginForm.value)
      .pipe(
        delay(500)
      ).subscribe(
        () => {
          this.router.navigate(['main', 'all']);
          this.isLoginError = false;
        },
        error => {
          this.isLoginError = true;
        },
        () => {
          this.createElementService.endLoading();
        }
      );
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
