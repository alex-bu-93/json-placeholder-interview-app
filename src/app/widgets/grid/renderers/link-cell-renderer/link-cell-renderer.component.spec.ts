import { ComponentFixture }                          from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks }          from 'ng-mocks';
import { LinkCellRendererModule }                    from './link-cell-renderer.module';
import { LinkCellParams, LinkCellRendererComponent } from './link-cell-renderer.component';

const FAKE_LINK_CELL_PARAMS: LinkCellParams = {routerLink: 'content'} as LinkCellParams;

describe('LinkCellRendererComponent', () => {

  let fixture: ComponentFixture<LinkCellRendererComponent>;

  beforeEach(() => MockBuilder(LinkCellRendererComponent, LinkCellRendererModule));
  beforeEach(() => fixture = MockRender(LinkCellRendererComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a-tag after agInit called', () => {
    expect(ngMocks.findAll('a').length).toBe(0);
    fixture.componentInstance.agInit(FAKE_LINK_CELL_PARAMS);
    fixture.componentInstance.cdr.markForCheck();
    fixture.detectChanges();
    expect(ngMocks.find('a')).toBeTruthy();
  });
});
