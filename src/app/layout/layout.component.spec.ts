import { MockBuilder, MockRender, MockedComponentFixture, ngMocks }                  from 'ng-mocks';
import { NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzTabComponent, NzTabSetComponent }                                         from 'ng-zorro-antd/tabs';
import { LayoutComponent }                                                           from './layout.component';
import { LayoutModule }                                                              from './layout.module';
import { MOBILE_BREAKPOINT }                                                         from './layout.constants';

describe('LayoutComponent', () => {

  let fixture: MockedComponentFixture<LayoutComponent>;
  let routesCount: number;

  beforeEach(() => MockBuilder(LayoutComponent, LayoutModule));
  beforeEach(() => {
    fixture = MockRender(LayoutComponent);
    routesCount = fixture.componentInstance.LAYOUT_ROUTES.length;
  });

  function spyOnWindowWidth(returnValue: number) {
    spyOnProperty(window, 'innerWidth').and.returnValue(returnValue);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have header', () => {
    expect(ngMocks.find(NzHeaderComponent).componentInstance).toBeTruthy();
  });

  it('should have footer', () => {
    expect(ngMocks.find(NzFooterComponent).componentInstance).toBeTruthy();
  });

  it('should call onResize fn on window resize event', () => {
    spyOn(fixture.componentInstance, 'onResize');
    const ANY_WIDTH_NO_MATTER = 1000;
    spyOnWindowWidth(ANY_WIDTH_NO_MATTER);
    expect(fixture.componentInstance.onResize).toHaveBeenCalled();
  });

  it(`if desktop should have tabSet in header and tabs count should be ${routesCount}`, () => {
    spyOnWindowWidth(MOBILE_BREAKPOINT + 1);
    expect(ngMocks.find(ngMocks.find(ngMocks.find(NzHeaderComponent), '.container-fluid'), NzTabSetComponent)).toBeTruthy();
    expect(ngMocks.findAll(ngMocks.find(NzTabSetComponent), NzTabComponent).length).toBe(routesCount);
  });

  it('if mobile should NOT have tabSet in header', () => {
    spyOnWindowWidth(MOBILE_BREAKPOINT - 1);
    expect(ngMocks.findAll(NzTabSetComponent).length).toEqual(0);
  });

  it(`if mobile should have sider and tabs count should be ${routesCount}`, () => {
    spyOnWindowWidth(MOBILE_BREAKPOINT - 1);
    expect(ngMocks.findAll(ngMocks.find(NzLayoutComponent), NzSiderComponent)).toBeTruthy();
    expect(ngMocks.findAll(ngMocks.find(ngMocks.find(NzSiderComponent), 'ul'), 'li').length).toBe(routesCount);
  });

  it('if desktop should not have sider', () => {
    spyOnWindowWidth(MOBILE_BREAKPOINT + 1);
    expect(ngMocks.findAll(ngMocks.find(NzLayoutComponent), NzSiderComponent).length).toEqual(0);
  });
});
