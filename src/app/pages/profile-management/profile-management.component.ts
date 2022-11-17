import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonServiceService } from 'src/app/shared/services/common-service.service';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {
  
  updateProfileForm: FormGroup;
  user: any;
  countries: any = [];
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private commonService: CommonServiceService
  ) { 
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log("us",this.user);
  }

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      company: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      taxId: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      notifications: [false, Validators.required]
    })
    this.getUserProfile()
  }

  getUserProfile(){
    this.authService.getUserProfile(this.user.id).subscribe((res: any) => {
      console.log('res --- ', res)
      this.updateProfileForm.get('email').patchValue(res.email);
      this.updateProfileForm.get('password').patchValue(res.password);
      this.updateProfileForm.get('company').patchValue(res.company);
      this.updateProfileForm.get('firstName').patchValue(res.firstName);
      this.updateProfileForm.get('lastName').patchValue(res.lastName);
      this.updateProfileForm.get('city').patchValue(res.city);
      this.updateProfileForm.get('postCode').patchValue(res.postCodeZip);
      this.updateProfileForm.get('taxID').patchValue(res.taxID);
      this.updateProfileForm.get('phone').patchValue(res.phone);
      this.updateProfileForm.get('address').patchValue(res.address);
      this.updateProfileForm.get('state').patchValue(res.state);
      this.updateProfileForm.get('country').patchValue(res.country);
      this.updateProfileForm.get('notifications').patchValue(res.accountNotifications);
    })
  }

  updateUserProfile(id){
    this.authService.updateUserProfile(id, this.updateProfileForm.value).subscribe((res: any) => {
      console.log('res --- ', res)
    })
  }

}
