import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  showSidebar: boolean = false;
  showNavbar: boolean = false;
  showFooter: boolean = false;
  isLoading: boolean;

  constructor(private router: Router, private actRoute: ActivatedRoute) {
    console.log('actRoute --- ', this.actRoute);
    console.log('this.router.url --- ', this.router.url);
  }

  ngOnInit() {
  }
}
