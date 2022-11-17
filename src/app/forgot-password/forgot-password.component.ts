import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSumit(){
    if(this.forgotPasswordForm.invalid){
      this.forgotPasswordForm.markAllAsTouched();
    } else{
      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((res: any) => {
        console.log(`res --- `, res)
        if(res){
          this.toastr.success(res.message);
          // this.router.navigate(['/reset-password'])
        }
      },(error: any) => {
        this.toastr.error(error.error.message);
      })
    }
  }

}
