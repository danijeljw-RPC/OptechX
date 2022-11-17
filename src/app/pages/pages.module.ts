import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ReportsComponent } from './reports/reports.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OsCatalogueComponent } from './os-catalogue/os-catalogue.component';
import { DriverLibraryComponent } from './driver-library/driver-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    DashboardComponent,
    ProfileManagementComponent,
    ApplicationViewComponent,
    CreateImageComponent,
    OrderManagementComponent,
    ReportsComponent,
    InvoiceComponent,
    OsCatalogueComponent,
    DriverLibraryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
