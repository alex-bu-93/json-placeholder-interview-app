import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { PhotosService }                      from '../../photos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {

  photo$ = this.photosService.getPhoto$(this.route.snapshot.params['id']);

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) {
  }
}
