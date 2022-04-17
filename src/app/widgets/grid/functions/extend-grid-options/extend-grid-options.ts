import { GridOptions }         from 'ag-grid-community';
import { frameworkComponents } from '../../renderers';

const DEFAULT_GRID_OPTIONS: GridOptions = {
  animateRows: true,
  suppressDragLeaveHidesColumns: true,
  enableCellTextSelection: true,
  suppressRowClickSelection: true,
  popupParent: document.querySelector('body'),
  defaultColDef: {sortable: true, resizable: true, filter: true},
  frameworkComponents
};

export const extendGridOptions = (go: Partial<GridOptions>) => Object.assign(DEFAULT_GRID_OPTIONS, go);
