import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from '../employee/blank/blank.component';
import { HomeComponent } from './home/home.component';
import { Navbar2Component } from '../employee/navbar2/navbar2.component';
import { LeaveComponent } from '../leave/leave/leave.component';
import { ExpensesComponent } from '../expenses/expenses/expenses.component';
import { AccountDetailsComponent } from '../account-details/account-details/account-details.component';

const routes: Routes = [{
  path:'home',component : HomeComponent
},

{ path:'employee',
loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
},
{path:'',redirectTo:'home',pathMatch:'full'},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
