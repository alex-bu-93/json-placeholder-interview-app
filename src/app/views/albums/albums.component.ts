import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrameworkComponent }                 from '@widgets/grid/renderers';
import { LinkCellParams }                     from '@widgets/grid/renderers/link-cell-renderer';
import { extendGridOptions }                  from '@widgets/grid/functions/extend-grid-options';
import { GridOptions, ICellRendererParams }   from 'ag-grid-community';
import { AlbumsService }                      from './albums.service';

const GRID_OPTIONS: GridOptions = {
  columnDefs: [
    {
      field: 'id',
      headerName: 'ID',
      filter: 'agNumberColumnFilter',
      width: 110,
      minWidth: 72,
      cellRenderer: FrameworkComponent.LinkCellRenderer,
      cellRendererParams: (p: ICellRendererParams) => ({routerLink: ['/albums', p.value]} as LinkCellParams)
    },
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

  gridOptions = extendGridOptions(GRID_OPTIONS);
  albums$ = this.albumsService.getAlbums$();

  constructor(
    private albumsService: AlbumsService
  ) {
  }
}
