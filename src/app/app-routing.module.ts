import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StripeFailureComponent } from './stripe-failure/stripe-failure.component';
import { StripeSuccessComponent } from './stripe-success/stripe-success.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyNotifypopupComponent } from './verify-notifypopup/verify-notifypopup.component';


const routes: Routes = [
 // { path: '', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'verify-account', component: VerifyNotifypopupComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'upgrad-your-plan', component: PlansComponent },
   { path: 'plans/success', component: StripeSuccessComponent},
   { path: 'plans/failure', component: StripeFailureComponent},
  { path: 'account/verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'account/reset-password', component: ResetPasswordComponent },
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
