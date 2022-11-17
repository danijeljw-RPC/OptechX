import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonServiceService } from 'src/app/shared/services/common-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted = false
  signUpForm: FormGroup;
  countries: any = [];
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private commonService: CommonServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {
     
  }

  ngOnInit(): void {
    this.getCountryList();
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      acceptTerms: ['', Validators.required]
    }, { validators: this.MatchPassword })
  }

  MatchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ ConfirmPassword: true });
    } else {
      // return null;
    }
  }

  signup(){
    if(this.signUpForm.invalid){
      return this.signUpForm.markAllAsTouched();
    }
      console.log(`this.signUpForm.value --- `, this.signUpForm.value)
      this.authService.signup(this.signUpForm.value).subscribe((res: any) => {
        console.log(`res --- `, res)
        if(res){
           this.router.navigate(['/verify-account']);
        }
      }, (error: any) => {
        this.toastr.error(error.error.message);
      })
  }

  getCountryList(){
    this.commonService.countryList().subscribe(res =>{ 
      this.countries = res;
    });
  }

}
