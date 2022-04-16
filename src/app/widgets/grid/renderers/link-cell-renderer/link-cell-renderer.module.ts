import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import { RouterModule }              from '@angular/router';
import { LinkCellRendererComponent } from './link-cell-renderer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LinkCellRendererComponent]
})
export class LinkCellRendererModule {
}
