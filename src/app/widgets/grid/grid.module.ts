import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AgGridModule }   from 'ag-grid-angular';
import { NzInputModule }  from 'ng-zorro-antd/input';
import { NzIconModule }   from 'ng-zorro-antd/icon';
import { NzTagModule }    from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GridComponent }  from './grid.component';

const ANT_DESIGN_MODULES = [
  NzInputModule,
  NzIconModule,
  NzTagModule,
  NzButtonModule
];

@NgModule({
  imports: [
    FormsModule,
    AgGridModule,
    ANT_DESIGN_MODULES,
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule {
}
