import {Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stripe-failure',
  templateUrl: './stripe-failure.component.html',
  styleUrls: ['./stripe-failure.component.scss']
})
export class StripeFailureComponent implements OnInit{

  constructor(private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.toastr.success("F A I L D !")
  }

}
