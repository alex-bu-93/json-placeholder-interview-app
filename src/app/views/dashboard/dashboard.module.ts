import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RequestWrapperModule }   from '@widgets/request-wrapper';
import { PaginatedPhotosModule }  from '@widgets/paginated-photos';
import { NzPageHeaderModule }     from 'ng-zorro-antd/page-header';
import { NzStatisticModule }      from 'ng-zorro-antd/statistic';
import { NzIconModule }           from 'ng-zorro-antd/icon';
import { NzTabsModule }           from 'ng-zorro-antd/tabs';
import { NzTypographyModule }     from 'ng-zorro-antd/typography';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent }     from './dashboard.component';

const ANT_DESIGN_MODULES = [
  NzPageHeaderModule,
  NzStatisticModule,
  NzIconModule,
  NzTabsModule,
  NzTypographyModule
];

@NgModule({
  imports: [
    CommonModule,
    RequestWrapperModule,
    DashboardRoutingModule,
    PaginatedPhotosModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
