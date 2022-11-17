import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-notifypopup',
  templateUrl: './verify-notifypopup.component.html',
  styleUrls: ['./verify-notifypopup.component.scss']
})
export class VerifyNotifypopupComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.router.navigate(['/login']);
  }
}
