import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ICellRendererParams }                                   from 'ag-grid-community';
import { ICellRendererAngularComp }                              from 'ag-grid-angular';

export interface LinkCellParams extends ICellRendererParams {
  routerLink: string[] | string;
}

@Component({
  selector: 'app-btn-cell-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="params">
      <a *ngIf="params.routerLink else noLinkTmp"
         class="text-link"
         target="_self"
         [routerLink]="params.routerLink">
        {{params.valueFormatted || params.value}}
      </a>
      <ng-template #noLinkTmp><span>{{params.valueFormatted || params.value}}</span></ng-template>
    </ng-container>`
})
export class LinkCellRendererComponent implements ICellRendererAngularComp {

  params: LinkCellParams;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  refresh = (): boolean => false;

  agInit(params: LinkCellParams) {
    this.params = params;
    this.cdr.markForCheck();
  }
}
