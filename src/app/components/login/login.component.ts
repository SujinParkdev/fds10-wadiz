import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { User } from '../../core/interface/user';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';


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
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        Validators.maxLength(17)
      ]]
    });
  }

  testForm() {
    console.dir(this.username);
  }

  submitLogin() {
    console.log('[payload]', this.loginForm.value);
    this.loginService.signin(this.loginForm.value)
      .subscribe(
        () => this.router.navigate(['main']),
        (error) => {
          this.isLoginError = true;
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
