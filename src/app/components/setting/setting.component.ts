import { Component, OnInit } from '@angular/core';
import { CreateElementService } from '../../core/services/create-element/create-element.service';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  isSettingError: boolean;
  settingForm: FormGroup;

  get userInfo() {
    return this.loginService.userInfo;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private createElementService: CreateElementService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.settingForm = this.fb.group({
      username: ['',
        [
          Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
        ]
      ],
      nickname: ['',
        [
          Validators.minLength(2)
        ]
      ],
      passwordGroup: this.fb.group({
        newPassword: ['',
          [
            // Validators.pattern(/(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
            Validators.maxLength(17)
          ]
        ],
        newPassword1: ['']
      },
      { validator: this.checkPassword }),
      password: ['', Validators.required]
    });
  }

  clickSubmit() {
    this.isSettingError = true;
  }

  clickQuit() {
    this.isSettingError = false;
  }

  private checkPassword(control: AbstractControl): {[key: string]: {} } {
    const password = control.get('newPassword').value;
    const password1 = control.get('newPassword1').value;
    if (password === password1) {
      return null;
    } else {
      return { match: { password, password1 }};
    }
  }

  get username() {
    return this.settingForm.get('username');
  }
  get nickname() {
    return this.settingForm.get('nickname');
  }
  get password() {
    return this.settingForm.get('password');
  }
  get passwordGroup() {
    return this.settingForm.get('passwordGroup');
  }
  get newPassword() {
    return this.settingForm.get('passwordGroup').get('newPassword');
  }
  get newPassword1() {
    return this.settingForm.get('passwordGroup').get('newPassword1');
  }
}
