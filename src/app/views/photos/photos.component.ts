import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap }                                from 'rxjs/operators';
import { PhotosService }                      from './photos.service';
import { Photo }                              from './photos.interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: [`
    .grid-cards { display: grid; grid-template-columns: repeat(auto-fill, 150px); justify-content: space-between; }
  `]
})
export class PhotosComponent {

  pageIndex = 1;
  pageSize = 10;

  displayPhotos: Photo[];
  photos$ = this.getPhotos$();

  constructor(
    private photosService: PhotosService
  ) {
  }

  getPhotos$(term?: string) {
    return this.photosService.getPosts$(term).pipe(
      tap(photos => this.displayPhotos = this.getDisplayPhotos(photos))
    );
  }

  getDisplayPhotos = (photos: Photo[]) => photos.slice(this.pageIndex, this.pageIndex + this.pageSize);
}
