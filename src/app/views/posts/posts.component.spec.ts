import { ComponentFixture }                                     from '@angular/core/testing';
import { RequestWrapperComponent }                              from '@widgets/request-wrapper';
import { MockBuilder, MockedDebugElement, MockRender, ngMocks } from 'ng-mocks';
import { PostsComponent }                                       from './posts.component';
import { PostsService }                                         from './posts.service';
import { PostsModule }                                          from './posts.module';

describe('PostsComponent', () => {

  let fixture: ComponentFixture<PostsComponent>;
  let requestWrapper: MockedDebugElement<RequestWrapperComponent>;

  beforeEach(() => MockBuilder(PostsComponent, PostsModule).mock(PostsService));

  beforeEach(() => {
    fixture = MockRender(PostsComponent);
    requestWrapper = ngMocks.find(RequestWrapperComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(requestWrapper.componentInstance).toBeTruthy();
  });

});
