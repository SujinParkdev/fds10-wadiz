import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { User } from '../../core/interface/user';
import { AuthService } from '../../core/services/login-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]],
      password: ['', [Validators.required,
        Validators.pattern(/[a-zA-Z0-9]/),
        Validators.minLength(4),
        Validators.maxLength(10)
      ]]
    });
  }

  signin() {
    console.log('[payload]', this.signinForm.value);
    this.auth.signin(this.signinForm.value)
      .subscribe(
        () => this.router.navigate(['main']),
        ({error}) => {
          console.log(error.message);
          this.message = error.message;
        }
      );
  }

  get userid() {
    return this.signinForm.get('userid');
  }

  get password() {
    return this.signinForm.get('password');
  }
}
