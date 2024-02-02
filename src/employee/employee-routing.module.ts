import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Navbar2Component } from './navbar2/navbar2.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [

{ path:'profile',component: Navbar2Component, children:[
   {path:"",component:BlankComponent},
   {
    path: 'leave',
    loadChildren: () => import('../leave/leave.module').then(m => m.LeaveModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('../expenses/expenses.module').then(m => m.ExpensesModule)
  },
  
]}
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
