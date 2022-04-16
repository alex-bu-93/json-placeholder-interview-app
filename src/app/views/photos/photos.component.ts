import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotosService }                      from './photos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent {

  photos$ = this.photosService.getPhotos$();

  constructor(
    private photosService: PhotosService
  ) {
  }
}
