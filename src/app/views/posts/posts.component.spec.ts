import { ComponentFixture }                 from '@angular/core/testing';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { GridComponent }                    from '@widgets/grid';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { PostsComponent }                   from './posts.component';
import { PostsService }                     from './posts.service';
import { PostsModule }                      from './posts.module';

const FAKE_POSTS = Array.from({length: 5}).map((x, i) => ({userId: i, id: i, title: 't' + i, body: 'b' + i}));

describe('PostsComponent', () => {

  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => MockBuilder(PostsComponent, PostsModule).mock(PostsService, {getPosts$: () => of(FAKE_POSTS)}));
  beforeEach(() => fixture = MockRender(PostsComponent));

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
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_POSTS));
  });

  it('app grid should get gridOptions', () => {
    expect(ngMocks.find(GridComponent).componentInstance.gridOptions).toEqual(fixture.componentInstance.gridOptions);
  });
});
