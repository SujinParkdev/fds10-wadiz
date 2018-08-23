import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { CreateElementService } from '../../core/services/create-element/create-element.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  isAgreePop = false;
  agreeForm: FormGroup;
  joinForm: FormGroup;
  isJoinError: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private createElementService: CreateElementService
  ) {
    if (loginService.isLogin) {
      this.router.navigate(['/main/all']);
    }
  }

  ngOnInit() {
    this.agreeForm = this.fb.group({
      allAgree: [false],
      chkAgree1: [false, Validators.pattern('true')],
      chkAgree2: [false]
    });

    this.joinForm = this.fb.group({
      checkAgree: [false, Validators.pattern('true')],
      username: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
        ]
      ],
      nickname: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      passwordGroup: this.fb.group({
        password: [
          { value: '', disabled: true }, [
            Validators.required,
            // Validators.pattern(/(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
            Validators.maxLength(17)
          ]
        ],
        password1: [{ value: '', disabled: true }, Validators.required]
      },
      { validator: this.checkPassword })
    });
  }

  checkAgreeEvt(value: boolean) {
    value ? this.enableJoinForm() : this.disableJoinForm();
  }

  enableJoinForm() {
    this.joinForm.get('checkAgree').setValue(true);
    this.joinForm.get('username').enable();
    this.joinForm.get('nickname').enable();
    this.joinForm.get('passwordGroup').get('password').enable();
    this.joinForm.get('passwordGroup').get('password1').enable();
    this.agreeForm.get('allAgree').setValue(true);
    this.agreeForm.get('chkAgree1').setValue(true);
    this.agreeForm.get('chkAgree2').setValue(true);
  }

  disableJoinForm() {
    this.joinForm.get('checkAgree').setValue(false);
    this.joinForm.get('username').disable();
    this.joinForm.get('nickname').disable();
    this.joinForm.get('passwordGroup').get('password').disable();
    this.joinForm.get('passwordGroup').get('password1').disable();
    this.agreeForm.get('allAgree').setValue(false);
    this.agreeForm.get('chkAgree1').setValue(false);
    this.agreeForm.get('chkAgree2').setValue(false);
  }

  changeAllAgree(value: boolean) {
    this.agreeForm.get('chkAgree1').setValue(value);
    this.agreeForm.get('chkAgree2').setValue(value);
  }

  closeAgreePop() {
    this.disableJoinForm();
    this.isAgreePop = false;
  }

  submitAgreePop() {
    this.enableJoinForm();
    this.isAgreePop = false;
  }

  submitJoin() {
    if (this.joinForm.invalid) { return; }
    const payload = {
      username: this.username.value,
      nickname: this.nickname.value,
      password: this.password.value,
      check_password: this.passwordGroup.get('password1').value,
      funding_set: [],
      like_products: []
    };

    this.createElementService.startLoading();
    this.loginService.signup(payload)
      .pipe(
        delay(500)
      ).subscribe(
        () => {
          this.createElementService.endLoading();
          this.isJoinError = false;
          this.createElementService.alert(
            '회원가입이 완료되었습니다.\n해당 이메일 계정으로 인증 절차를 거친 후\n로그인이 가능합니다.',
            () => {
              this.router.navigate(['/main/all']);
            }
          );
        },
        error => {
          this.createElementService.endLoading();
          this.isJoinError = true;
        }
      );
  }

  private checkPassword(control: AbstractControl): {[key: string]: {} } {
    const password = control.get('password').value;
    const password1 = control.get('password1').value;
    if (password === password1) {
      return null;
    } else {
      return { match: { password, password1 }};
    }
  }

  get chkAgree1() {
    return this.agreeForm.get('chkAgree1').value;
  }
  get chkAgree2() {
    return this.agreeForm.get('chkAgree2').value;
  }
  get username() {
    return this.joinForm.get('username');
  }
  get nickname() {
    return this.joinForm.get('nickname');
  }
  get password() {
    return this.joinForm.get('passwordGroup').get('password');
  }
  get password1() {
    return this.joinForm.get('passwordGroup').get('password1');
  }
  get passwordGroup() {
    return this.joinForm.get('passwordGroup');
  }
}

