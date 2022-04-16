import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PostsService }                       from './posts.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {

  posts$ = this.postsService.getPosts();

  constructor(
    private postsService: PostsService
  ) {
  }
}
