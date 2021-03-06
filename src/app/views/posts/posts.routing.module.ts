import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent }        from './views/post';
import { PostsComponent }       from './posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: ':id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
