import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { GridModule }           from '@widgets/grid';
import { PostsRoutingModule }   from './posts.routing.module';
import { PostsComponent }       from './posts.component';

const WIDGETS_MODULES = [
  RequestWrapperModule,
  GridModule
];

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    WIDGETS_MODULES
  ],
  declarations: [PostsComponent]
})
export class PostsModule {
}
