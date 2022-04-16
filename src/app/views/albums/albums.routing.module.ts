import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { AlbumComponent, AlbumModule } from './views/album';
import { AlbumsComponent }             from './albums.component';

const routes: Routes = [
  {path: '', component: AlbumsComponent},
  {path: ':id', component: AlbumComponent},
];

@NgModule({
  imports: [
    AlbumModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
