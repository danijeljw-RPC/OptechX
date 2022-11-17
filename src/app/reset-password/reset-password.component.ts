import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  token: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute
  ) {
    this.token = this.actRoute.snapshot.queryParams.token;
  }

  MatchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ ConfirmPassword: true });
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      token: [this.token, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.MatchPassword }
    )
  }

  onSubmit(){
    if(this.resetPasswordForm.invalid){
      this.resetPasswordForm.markAllAsTouched();
    } else{
      this.authService.resetPassword(this.resetPasswordForm.value).subscribe((res: any) => {
        console.log(`res --- `, res)
        if(res){
          this.toastr.success(res.message);
          this.router.navigate(['/login'])
        }
      }, (error: any) => {
        this.toastr.error(error.error.message);
      })
    }
  }

}
