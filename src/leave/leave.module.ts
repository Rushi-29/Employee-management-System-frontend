import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { PiechartComponent } from './piechart/piechart.component';
import { Chart, registerables } from 'chart.js';
import { SharedModule } from 'src/shared/shared.module';
import { LeaveRoutingModule } from './leave/leave-routing.module';
Chart.register(...registerables);


@NgModule({
  declarations: [
    LeaveComponent,
    ApplyLeaveComponent,
    ChartComponent,
    PiechartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LeaveRoutingModule
  ],
  

})
export class LeaveModule { }
