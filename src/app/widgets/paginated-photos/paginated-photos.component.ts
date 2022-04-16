import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Photo }                                             from './photo.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-paginated-photos',
  templateUrl: './paginated-photos.component.html',
  styles: [`
    .grid-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, 150px);
      justify-content: space-between;
    }
  `]
})
export class PaginatedPhotosComponent implements OnInit {

  @Input() photos: Photo[];

  pageIndex = 1;
  pageSize = 10;

  displayPhotos: Photo[];

  ngOnInit() {
    this.displayPhotos = this.getDisplayPhotos(this.photos);
  }

  getDisplayPhotos = (photos: Photo[]) => photos?.slice(this.pageIndex, this.pageIndex + this.pageSize) || [];
}
