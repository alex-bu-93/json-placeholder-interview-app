import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { PostsService }                       from '../../posts.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  post$ = this.postsService.getPost$(this.route.snapshot.params['id']);

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }
}
