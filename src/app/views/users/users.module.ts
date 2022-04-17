import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { GridModule }           from '@widgets/grid';
import { NzModalModule }        from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { UsersRoutingModule }   from './users.routing.module';
import { UsersComponent }       from './users.component';

const ANT_DESIGN_MODULES = [
  NzModalModule,
  NzDescriptionsModule
];

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    RequestWrapperModule,
    UsersRoutingModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [UsersComponent]
})
export class UsersModule {
}
