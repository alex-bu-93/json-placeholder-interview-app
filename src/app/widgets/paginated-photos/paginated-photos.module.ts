import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { NzPaginationModule }       from 'ng-zorro-antd/pagination';
import { NzCardModule }             from 'ng-zorro-antd/card';
import { NzImageModule }            from 'ng-zorro-antd/image';
import { NzIconModule }             from 'ng-zorro-antd/icon';
import { PaginatedPhotosComponent } from './paginated-photos.component';

const ANT_DESIGN_MODULES = [
  NzPaginationModule,
  NzCardModule,
  NzImageModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [PaginatedPhotosComponent],
  exports: [PaginatedPhotosComponent]
})
export class PaginatedPhotosModule {
}
