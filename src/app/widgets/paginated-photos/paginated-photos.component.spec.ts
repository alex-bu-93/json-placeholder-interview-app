import { ComponentFixture }         from '@angular/core/testing';
import { MockBuilder, MockRender }  from 'ng-mocks';
import { PaginatedPhotosComponent } from './paginated-photos.component';
import { PaginatedPhotosModule }    from './paginated-photos.module';

describe('PaginatedPhotosComponent', () => {

  let fixture: ComponentFixture<PaginatedPhotosComponent>;

  beforeEach(() => MockBuilder(PaginatedPhotosComponent, PaginatedPhotosModule));
  beforeEach(() => fixture = MockRender(PaginatedPhotosComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
