import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardService }                   from './dashboard.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    :host::ng-deep.ant-tabs-ink-bar { background-color: darkblue }
  `]
})
export class DashboardComponent {

  albumsCount = Math.floor(Math.random() * 100);
  dashboard$ = this.dashboardService.getDashboard$();

  constructor(
    private dashboardService: DashboardService
  ) {
  }
}
