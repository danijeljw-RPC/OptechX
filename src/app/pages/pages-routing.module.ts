import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverLibraryComponent } from './driver-library/driver-library.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OsCatalogueComponent } from './os-catalogue/os-catalogue.component';
import { PagesComponent } from './pages.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: PagesComponent, 
  children: [
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile-management', component: ProfileManagementComponent },
      { path: 'application-library', component: ApplicationViewComponent },
      { path: 'driver-library', component: DriverLibraryComponent },
      { path: 'os-catalogue', component: OsCatalogueComponent },
      { path: 'create-image', component: CreateImageComponent },
      { path: 'order-management', component: OrderManagementComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
