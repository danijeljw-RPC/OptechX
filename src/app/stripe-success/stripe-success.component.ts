import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stripe-success',
  templateUrl: './stripe-success.component.html',
  styleUrls: ['./stripe-success.component.scss']
})
export class StripeSuccessComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
     this.toastr.success("S U C C E S S !")
  }

}
