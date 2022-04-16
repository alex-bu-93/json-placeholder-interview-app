import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }       from '@angular/common';
import { NzLayoutModule }     from 'ng-zorro-antd/layout';
import { NzMenuModule }       from 'ng-zorro-antd/menu';
import { NzIconModule }       from 'ng-zorro-antd/icon';
import { NzTabsModule }       from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule }     from 'ng-zorro-antd/button';
import { LayoutComponent }    from './layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzTabsModule,
  NzTypographyModule,
  NzButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {
}
