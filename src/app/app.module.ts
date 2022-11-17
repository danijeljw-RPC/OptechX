import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { StripeSuccessComponent } from './stripe-success/stripe-success.component';
import { StripeFailureComponent } from './stripe-failure/stripe-failure.component';
import { VerifyNotifypopupComponent } from './verify-notifypopup/verify-notifypopup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    PagesComponent,
    PlansComponent, 
    LoginComponent,
    SignUpComponent, 
    CreateAccountComponent, 
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    StripeSuccessComponent,
    StripeFailureComponent,
    VerifyNotifypopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ThemeService,
  // {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
