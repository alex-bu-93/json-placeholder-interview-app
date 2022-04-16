import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent }      from './layout';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', loadChildren: () => import('./views/posts').then(m => m.PostsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
