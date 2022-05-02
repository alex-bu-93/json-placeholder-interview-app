import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { extendGridOptions }                                     from '@widgets/grid/functions/extend-grid-options';
import { GridOptions }                                           from 'ag-grid-community';
import { UsersService }                                          from './users.service';
import { User }                                                  from './users.interfaces';

const GRID_OPTIONS: GridOptions = {
  columnDefs: [
    {
      headerName: ' ',
      marryChildren: true,
      children: [
        {
          field: 'id',
          headerName: 'ID',
          filter: 'agNumberColumnFilter',
          width: 110,
          minWidth: 72,
          cellClass: ['text-link', 'cursor-pointer'],
          pinned: 'left',
          onCellClicked: p => p.context.openModal(p.data)
        },
        {field: 'name', filter: 'agTextColumnFilter', width: 142, minWidth: 100},
        {field: 'username', filter: 'agTextColumnFilter', width: 142, minWidth: 100},
        {field: 'email', filter: 'agTextColumnFilter', width: 142, minWidth: 100},
        {field: 'phone', filter: 'agTextColumnFilter', width: 142, minWidth: 100},
        {field: 'website', filter: 'agTextColumnFilter', width: 142, minWidth: 100},
      ]
    },
    {
      headerName: 'Address',
      marryChildren: true,
      children: [
        {field: 'street', valueGetter: p => p.data.address?.street},
        {field: 'suite', valueGetter: p => p.data.address?.suite},
        {field: 'city', valueGetter: p => p.data.address?.city},
        {field: 'zipcode', valueGetter: p => p.data.address?.zipcode}
      ]
    },
    {
      headerName: 'Company',
      marryChildren: true,
      children: [
        {field: 'name', valueGetter: p => p.data.company?.name},
        {field: 'catchPhrase', valueGetter: p => p.data.company?.catchPhrase},
        {field: 'bs', valueGetter: p => p.data.company?.bs},
      ]
    }
  ]
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users$ = this.usersService.getUsers$();

  gridOptions = extendGridOptions(GRID_OPTIONS);

  isUserModalVisible: boolean;
  curUser: User;

  constructor(
    public cdr: ChangeDetectorRef,
    private usersService: UsersService
  ) {
    this.gridOptions.context = this;
  }

  openModal(user: User) {
    this.curUser = user;
    this.isUserModalVisible = true;
    this.cdr.markForCheck();
  }
}
