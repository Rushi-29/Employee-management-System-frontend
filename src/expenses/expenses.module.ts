import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { SharedModule } from 'src/shared/shared.module';
import { ExpensesRoutingModule } from './expenses-routing.module';



@NgModule({
  declarations: [
    ExpensesComponent,
    AddExpensesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
