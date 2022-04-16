import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LayoutModule }           from './layout';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => import('./views/dashboard').then(m => m.DashboardModule)},
      {path: 'posts', loadChildren: () => import('./views/posts').then(m => m.PostsModule)}
    ]
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
