import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      businessName: ['', Validators.required],
      businessEmail: ['', Validators.required],
      contactPerson: [''],
      city: [''],
      postCode: [''],
      taxId: [''],
      phoneNumber: [''],
      address: [''],
      state: [''],
      country: ['']
    })
  }

  save(){

  }

}
