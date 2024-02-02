import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { BlankComponent } from './blank/blank.component';
import { AccountDetailsModule } from 'src/account-details/account-details.module';
import { AccountDetailsComponent } from 'src/account-details/account-details/account-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    SignUpComponent,
    Navbar2Component,
    BlankComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule { }
