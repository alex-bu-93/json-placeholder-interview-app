import { ComponentFixture }                 from '@angular/core/testing';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { DashboardComponent }               from './dashboard.component';
import { DashboardModule }                  from './dashboard.module';
import { DashboardService }                 from './dashboard.service';
import { Dashboard, LastPhoto, LastPost }   from './dashboard.interfaces';

const FAKE_DASHBOARD: Dashboard = {
  lastPosts: [{} as LastPost],
  lastPhotos: [{} as LastPhoto]
};

describe('DashboardComponent', () => {

  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => MockBuilder(DashboardComponent, DashboardModule).mock(DashboardService, {getDashboard$: () => of(FAKE_DASHBOARD)}));
  beforeEach(() => fixture = MockRender(DashboardComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_DASHBOARD));
  });
});
