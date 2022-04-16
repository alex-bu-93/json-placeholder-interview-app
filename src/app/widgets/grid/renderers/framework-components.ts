import { LinkCellRendererComponent } from './link-cell-renderer';

export enum FrameworkComponent {
  LinkCellRenderer = 'linkCellRenderer'
}

export const frameworkComponents: Record<FrameworkComponent, any> = {
  [FrameworkComponent.LinkCellRenderer]: LinkCellRendererComponent
}
