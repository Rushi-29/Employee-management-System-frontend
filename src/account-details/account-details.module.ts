import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AccountDetailsRoutingModule } from './account-details-routing.module';



@NgModule({
  declarations: [
    
    AddDetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountDetailsRoutingModule
  ]
})
export class AccountDetailsModule { }
