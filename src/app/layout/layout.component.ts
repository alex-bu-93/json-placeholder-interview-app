import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    nz-layout { min-height: 100vh }
    .container-fluid { max-width: 1000px }
  `]
})
export class LayoutComponent {
}
