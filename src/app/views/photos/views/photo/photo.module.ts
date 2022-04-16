import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NzPageHeaderModule }   from 'ng-zorro-antd/page-header';
import { PhotoComponent }       from './photo.component';

const ANT_DESIGN_MODULES = [
  NzPageHeaderModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [PhotoComponent]
})
export class PhotoModule {
}
