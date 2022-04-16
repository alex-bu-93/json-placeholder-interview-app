import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { GridOptions }                                                  from 'ag-grid-community';
import { flashAnimation }                                               from 'angular-animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  animations: [flashAnimation()],
  host: {class: 'flex-grow-1 d-flex flex-column h-100'},
  styles: ['nz-tag { line-height: 22px; min-width: 72px }']
})
export class GridComponent {

  @Input() gridOptions: GridOptions;
  @Input() rowData: { [key: string]: any; }[];

  term: string;

  rowsCount: number;
  filtersCount: number;

  rowsCountFlash: boolean;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  updateInfo() {
    this.filtersCount = Object.keys(this.gridOptions.api.getFilterModel()).length;
    let rowsCount = 0;
    this.gridOptions.api.forEachNodeAfterFilter(() => rowsCount++);
    if (rowsCount === this.rowsCount) return;
    this.rowsCount = rowsCount;
    this.rowsCountFlash = !this.rowsCountFlash;
    this.cdr.markForCheck();
  }
}
