import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FrameworkComponent }                 from '@widgets/grid/renderers';
import { LinkCellParams }                     from '@widgets/grid/renderers/link-cell-renderer';
import { extendGridOptions }                  from '@widgets/grid/functions/extend-grid-options';
import { GridOptions, ICellRendererParams }   from 'ag-grid-community';
import { PostsService }                       from './posts.service';

const GRID_OPTIONS: GridOptions = {
  columnDefs: [
    {
      field: 'id',
      headerName: 'ID',
      filter: 'agNumberColumnFilter',
      width: 110,
      minWidth: 72,
      cellRenderer: FrameworkComponent.LinkCellRenderer,
      cellRendererParams: (p: ICellRendererParams) => ({routerLink: ['/posts', p.value]} as LinkCellParams)
    },
    {field: 'userId', headerName: 'User ID', filter: 'agNumberColumnFilter', width: 142, minWidth: 100},
    {field: 'title', headerName: 'Title', filter: 'agTextColumnFilter', minWidth: 300, flex: 1},
    {field: 'body', headerName: 'Body', filter: 'agTextColumnFilter', minWidth: 300, flex: 1}
  ]
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {

  gridOptions = extendGridOptions(GRID_OPTIONS);
  posts$ = this.postsService.getPosts$();

  constructor(
    private postsService: PostsService
  ) {
  }
}
