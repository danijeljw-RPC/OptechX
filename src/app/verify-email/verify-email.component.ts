import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  emailVerificationForm: FormGroup;
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

  ngOnInit(): void {
    this.emailVerificationForm = this.fb.group({
      token: [this.token, Validators.required]
    })
  }

  onSubmit(){
    if(this.emailVerificationForm.invalid){
      this.emailVerificationForm.markAllAsTouched();
    } else{
      this.authService.verifyToken(this.emailVerificationForm.value).subscribe((res: any) => {
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
