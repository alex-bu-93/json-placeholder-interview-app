import { NgModule }             from '@angular/core';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { GridModule }           from '@widgets/grid';
import { AlbumsRoutingModule }  from './albums.routing.module';
import { AlbumsComponent }      from './albums.component';

const WIDGETS_MODULES = [
  RequestWrapperModule,
  GridModule
];

@NgModule({
  imports: [
    AlbumsRoutingModule,
    WIDGETS_MODULES
  ],
  declarations: [AlbumsComponent]
})
export class AlbumsModule {
}
