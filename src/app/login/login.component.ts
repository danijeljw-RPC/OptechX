import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordHidden = true;
  loginForm: FormGroup;

 // loading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  togglePassword = () => {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {
   const controles = this.loginForm.controls;
    const loginData = {
      email : controles.email.value,
      password: controles.password.value
    }
    if (this.loginForm.invalid) {
       return;
    } 
      this.authService.login(loginData.email, loginData.password).pipe(
        tap(user =>{
           const { jwtToken } = user;
           localStorage.setItem('access_token', jwtToken );
           this.toastr.success("login Sucessfully.");
           this.router.navigate(['/dashboard']);
        }),
        catchError(err => {
          this.toastr.error(err.error.message);
          return throwError("error",err);
        })
      ).subscribe();
  }

  forgotPassword(){
    this.router.navigate(['/forgot-password'])
  }

}
