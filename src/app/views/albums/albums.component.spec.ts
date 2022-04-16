import { ComponentFixture }                 from '@angular/core/testing';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { GridComponent }                    from '@widgets/grid';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { AlbumsComponent }                  from './albums.component';
import { AlbumsModule }                     from './albums.module';
import { AlbumsService }                    from './albums.service';

const FAKE_ALBUMS = Array.from({length: 5}).map((x, i) => ({userId: i, id: i, title: 't' + i}));

describe('AlbumsComponent', () => {

  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(() => MockBuilder(AlbumsComponent, AlbumsModule).mock(AlbumsService, {getAlbums$: () => of(FAKE_ALBUMS)}));
  beforeEach(() => fixture = MockRender(AlbumsComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('should have grid', () => {
    expect(ngMocks.find(GridComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get albums observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_ALBUMS));
  });

  it('app grid should get gridOptions', () => {
    expect(ngMocks.find(GridComponent).componentInstance.gridOptions).toEqual(fixture.componentInstance.gridOptions);
  });
});
