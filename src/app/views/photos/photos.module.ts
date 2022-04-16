import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { PaginatedPhotosModule } from '@widgets/paginated-photos';
import { RequestWrapperModule }  from '@widgets/request-wrapper';
import { PhotosComponent }       from './photos.component';
import { PhotosRoutingModule }   from './photos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule,
    PaginatedPhotosModule,
    RequestWrapperModule
  ],
  declarations: [PhotosComponent]
})
export class PhotosModule {
}
