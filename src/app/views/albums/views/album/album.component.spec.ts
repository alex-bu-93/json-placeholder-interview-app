import { ComponentFixture }                 from '@angular/core/testing';
import { ActivatedRoute }                   from '@angular/router';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { Photo }                            from '@widgets/paginated-photos';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { AlbumModule }                      from './album.module';
import { AlbumComponent }                   from './album.component';
import { AlbumsService }                    from '../../albums.service';

const FAKE_ALBUM = {userId: 1, id: 1, title: 't'};
const FAKE_PHOTOS: Photo[] = Array.from({length: 5}).map((x, i) => ({
  albumId: i,
  id: i,
  title: 't' + i,
  url: 'u' + i,
  thumbnailUrl: 'tu' + i
}));

describe('AlbumComponent', () => {

  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(() => MockBuilder(AlbumComponent, AlbumModule)
    .mock(ActivatedRoute, {snapshot: {params: {id: FAKE_ALBUM.id}}} as any)
    .mock(AlbumsService, {
      getAlbum$: () => of(FAKE_ALBUM),
      getAlbumPhotos$: () => of(FAKE_PHOTOS)
    })
  );
  beforeEach(() => fixture = MockRender(AlbumComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have album and photos request wrappers', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get album observable', () => {
    const [albumRequestWrapper, albumPhotosRequestWrapper] = ngMocks.findAll(RequestWrapperComponent);
    albumRequestWrapper.componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_ALBUM));
    albumPhotosRequestWrapper.componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_PHOTOS));
  });
});
