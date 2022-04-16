import { ComponentFixture }                 from '@angular/core/testing';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { Photo }                            from '@widgets/paginated-photos';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { PhotosComponent }                  from './photos.component';
import { PhotosModule }                     from './photos.module';
import { PhotosService }                    from './photos.service';

const FAKE_PHOTOS: Photo[] = Array.from({length: 5}).map((x, i) => ({
  albumId: i,
  id: i,
  title: 't' + i,
  url: 'u' + i,
  thumbnailUrl: 'tu' + i
}));

describe('PhotosComponent', () => {

  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => MockBuilder(PhotosComponent, PhotosModule).mock(PhotosService, {getPhotos$: () => of(FAKE_PHOTOS)}));
  beforeEach(() => fixture = MockRender(PhotosComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_PHOTOS));
  });
});
