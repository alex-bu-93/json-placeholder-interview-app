import { ComponentFixture }                           from '@angular/core/testing';
import { RequestWrapperComponent }                    from '@widgets/request-wrapper';
import { GridComponent }                              from '@widgets/grid';
import { isMockOf, MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { NzModalComponent, NzModalContentDirective }  from 'ng-zorro-antd/modal';
import { NzDescriptionsComponent }                    from 'ng-zorro-antd/descriptions';
import { of }                                         from 'rxjs';
import { UsersComponent }                             from './users.component';
import { UsersModule }                                from './users.module';
import { UsersService }                               from './users.service';
import { User }                                       from './users.interfaces';

const FAKE_USERS = Array.from({length: 5}).map(() => ({} as User));

describe('UsersComponent', () => {

  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => MockBuilder(UsersComponent, UsersModule).mock(UsersService, {getUsers$: () => of(FAKE_USERS)}));
  beforeEach(() => fixture = MockRender(UsersComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('should have grid', () => {
    expect(ngMocks.find(GridComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_USERS));
  });

  it('app grid should get gridOptions', () => {
    expect(ngMocks.find(GridComponent).componentInstance.gridOptions).toEqual(fixture.componentInstance.gridOptions);
  });

  it('should open modal on click and have at least one of imported fields', () => {
    const modalDirective = ngMocks.findInstance(ngMocks.find(NzModalComponent), NzModalContentDirective);
    if (isMockOf(modalDirective, NzModalContentDirective, 'd')) modalDirective.__render();
    fixture.componentInstance.openModal(FAKE_USERS[0]);
    fixture.componentInstance.cdr.markForCheck();
    fixture.detectChanges();
    expect(ngMocks.findAll(NzDescriptionsComponent).length).toBeGreaterThan(0);
  });
});
