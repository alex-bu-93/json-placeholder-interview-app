import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MOBILE_BREAKPOINT }                                from './layout.constants';

const LAYOUT_ROUTES = [
  {url: 'dashboard', label: 'Dashboard', icon: 'dashboard'},
  {url: 'posts', label: 'Posts', icon: 'edit'},
  {url: 'albums', label: 'Albums', icon: 'book'},
];

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    :host::ng-deep.ant-tabs-ink-bar { background-color: white }
    nz-header { height: 52px; line-height: 52px }
    nz-content { height: 1px }
    .container-fluid { max-width: 1000px }
  `]
})
export class LayoutComponent {

  LAYOUT_ROUTES = LAYOUT_ROUTES;

  isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  isCollapsed = true;

  @HostListener('window:resize', ['$event']) onResize() {
    this.isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    this.isCollapsed = true;
  }
}
