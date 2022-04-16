import { ComponentFixture }                 from '@angular/core/testing';
import { ActivatedRoute }                   from '@angular/router';
import { RequestWrapperComponent }          from '@widgets/request-wrapper';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { PostComponent }                    from './post.component';
import { PostModule }                       from './post.module';
import { PostsService }                     from '../../posts.service';

const FAKE_POST = {userId: 1, id: 1, title: 't', body: 'b'};

describe('PostComponent', () => {

  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => MockBuilder(PostComponent, PostModule)
    .mock(ActivatedRoute, {snapshot: {params: {id: FAKE_POST.id}}} as any)
    .mock(PostsService, {getPost$: () => of(FAKE_POST)}));
  beforeEach(() => fixture = MockRender(PostComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy();
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_POST));
  });
});
