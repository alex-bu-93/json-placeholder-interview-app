import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NzCardModule }         from 'ng-zorro-antd/card';
import { NzPaginationModule }   from 'ng-zorro-antd/pagination';
import { NzImageModule }        from 'ng-zorro-antd/image';
import { NzIconModule }         from 'ng-zorro-antd/icon';
import { PhotosComponent }      from './photos.component';
import { PhotosRoutingModule }  from './photos.routing.module';

const ANT_DESIGN_MODULES = [
  NzPaginationModule,
  NzCardModule,
  NzImageModule,
  NzIconModule
];
const WIDGETS_MODULES = [
  RequestWrapperModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PhotosRoutingModule,
    WIDGETS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [PhotosComponent]
})
export class PhotosModule {
}
