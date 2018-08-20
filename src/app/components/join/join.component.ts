import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  isAgreePop = false;
  agreeForm: FormGroup;
  joinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

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
            Validators.pattern(/(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
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
    console.log('[payload]', this.joinForm.value);
    const payload = {
      username: this.username.value,
      nickname: this.nickname.value,
      password: this.password.value,
      password1: this.passwordGroup.get('password1').value
    };
    console.log(payload);
    this.loginService.signup(this.joinForm.value);
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
  get passwordGroup() {
    return this.joinForm.get('passwordGroup');
  }
}

