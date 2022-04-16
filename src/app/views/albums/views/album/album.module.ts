import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { RequestWrapperModule }  from '@widgets/request-wrapper';
import { PaginatedPhotosModule } from '@widgets/paginated-photos';
import { NzPageHeaderModule }    from 'ng-zorro-antd/page-header';
import { AlbumComponent }        from './album.component';

const ANT_DESIGN_MODULES = [
  NzPageHeaderModule
];

@NgModule({
  imports: [
    CommonModule,
    PaginatedPhotosModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule {
}
