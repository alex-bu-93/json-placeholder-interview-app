import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GridOptions }                        from 'ag-grid-community';
import { PostsService }                       from './posts.service';

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

  postsGridOptions = GRID_OPTIONS;
  posts$ = this.postsService.getPosts$();

  constructor(
    private postsService: PostsService
  ) {
  }
}
