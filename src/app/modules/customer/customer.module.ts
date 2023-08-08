import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatLegacyProgressBarModule} from "@angular/material/legacy-progress-bar";




@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    GetCustomerComponent,
    GetAllCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatProgressBarModule,
        MatLegacyProgressBarModule
    ]
})
export class CustomerModule{

}
