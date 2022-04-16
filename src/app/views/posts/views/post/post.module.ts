import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NzPageHeaderModule }   from 'ng-zorro-antd/page-header';
import { PostComponent }        from './post.component';

const ANT_DESIGN_MODULES = [
  NzPageHeaderModule
];

@NgModule({
  imports: [
    CommonModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [PostComponent]
})
export class PostModule {
}
