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
      // username: ['',
      //     Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      // ],
      nickname: ['', Validators.minLength(2)
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
    const payload = {
      password: this.password.value
    };

    if (this.nickname.value) {
      payload['nickname'] = this.nickname.value;
    }
    if (this.newPassword.value) {
      payload['new_password'] = this.newPassword.value;
    }
    if (this.newPassword1.value) {
      payload['check_password'] = this.newPassword1.value;
    }

    this.createElementService.startLoading();
    this.loginService.changeInfo(payload).subscribe(
      res => {
        // console.log(res);
        this.createElementService.endLoading();
        this.isSettingError = false;
        this.createElementService.alert('정보변경이 완료되었습니다.', () => {
          this.router.navigate(['/main/all']);
        });
      },
      error => {
        // console.log(error);
        this.createElementService.endLoading();
        this.isSettingError = true;
      }
    );
  }

  clickQuit() {
    const payload = {
      password: this.password.value
    };
    this.createElementService.startLoading();
    this.loginService.deleteUser(payload).subscribe(
      res => {
        this.createElementService.endLoading();
        this.isSettingError = false;
        this.createElementService.alert('회원 탈퇴가 완료되었습니다.', () => {
          this.loginService.signout();
          this.router.navigate(['/main/all']);
        });
      },
      error => {
        this.createElementService.endLoading();
        this.isSettingError = true;
      }
    );
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
