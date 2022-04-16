import { ComponentFixture }                 from '@angular/core/testing';
import { ActivatedRoute }                   from '@angular/router';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { PhotoComponent }                   from './photo.component';
import { PhotoModule }                      from './photo.module';
import { PhotosService }                    from '../../photos.service';

const FAKE_PHOTO = {albumId: 1, id: 1, title: 't', url: 'u', thumbnailUrl: 'tu'};

describe('PhotoComponent', () => {

  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(() => MockBuilder(PhotoComponent, PhotoModule)
    .mock(ActivatedRoute, {snapshot: {params: {id: FAKE_PHOTO.id}}} as any)
    .mock(PhotosService, {getPhoto$: () => of(FAKE_PHOTO)}));
  beforeEach(() => fixture = MockRender(PhotoComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_PHOTO));
  });
});
