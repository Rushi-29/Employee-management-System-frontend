import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { LeaveModule } from 'src/leave/leave.module';
import { ExpensesModule } from 'src/expenses/expenses.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { AccountDetailsModule } from 'src/account-details/account-details.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LeaveModule,
    ExpensesModule,
    EmployeeModule,
    AccountDetailsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
