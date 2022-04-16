import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridOptions }                        from 'ag-grid-community';
import { AlbumsService }                      from './albums.service';

const GRID_OPTIONS: GridOptions = {
  animateRows: true,
  suppressDragLeaveHidesColumns: true,
  enableCellTextSelection: true,
  suppressRowClickSelection: true,
  popupParent: document.querySelector('body'),
  defaultColDef: {
    sortable: true,
    resizable: true,
    enableCellChangeFlash: true,
    filterParams: {buttons: ['reset']}
  },
  columnDefs: [
    {field: 'id', headerName: 'ID', filter: 'agNumberColumnFilter', width: 110, minWidth: 72},
    {field: 'userId', headerName: 'User ID', filter: 'agNumberColumnFilter', width: 142, minWidth: 100},
    {field: 'title', headerName: 'Title', filter: 'agTextColumnFilter', minWidth: 300, flex: 1}
  ]
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent {

  gridOptions = GRID_OPTIONS;
  albums$ = this.albumsService.getAlbums$();

  constructor(
    private albumsService: AlbumsService
  ) {
  }
}
