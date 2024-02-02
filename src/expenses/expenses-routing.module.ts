import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesModule } from './expenses.module';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  { path: 'states', component: ExpensesComponent },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ExpensesRoutingModule { }
