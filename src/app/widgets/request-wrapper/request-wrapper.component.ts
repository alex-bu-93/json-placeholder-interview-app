import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { HttpErrorResponse }                                                       from '@angular/common/http';
import { finalize, Observable, throwError }                                        from 'rxjs';
import { catchError, tap }                                                         from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-request-wrapper',
  templateUrl: './request-wrapper.component.html',
  styles: [`
    :host { height: 100% }
    :host::ng-deep.ant-spin-container { height: 100% }
    nz-spin { min-height: 100px }
  `]
})
export class RequestWrapperComponent<T = any> implements OnChanges {

  @Input() request$: Observable<T>;

  public data: T;

  isLoading: boolean;
  isFirstDataLoaded: boolean;

  error: string;

  constructor(
    public cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges() {
    this.request$ = this.getUpdatedStream(this.request$);
  }

  getUpdatedStream(request$: Observable<T>): Observable<T> {
    this.error = null;
    this.isLoading = true;
    return request$?.pipe(
      tap(data => this.onDataLoaded(data)),
      catchError((err: HttpErrorResponse) => { this.error = err.message; return throwError(() => err); }),
      finalize(() => { this.isLoading = false; this.cdr.markForCheck(); })
    );
  }

  onDataLoaded(data: T) {
    this.data = data;
    this.isFirstDataLoaded = true;
  }
}
