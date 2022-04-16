import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { AlbumsService }                      from '../../albums.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {

  album$ = this.albumsService.getAlbum$(this.route.snapshot.params['id']);
  albumPhotos$ = this.albumsService.getAlbumPhotos$(this.route.snapshot.params['id']);

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {
  }
}
