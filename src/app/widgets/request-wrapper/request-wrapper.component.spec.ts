import { ComponentFixture }                 from '@angular/core/testing';
import { NzSpinComponent }                  from 'ng-zorro-antd/spin';
import { finalize, of }                     from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { RequestWrapperComponent }          from './request-wrapper.component';
import { RequestWrapperModule }             from './request-wrapper.module';

const FAKE_DATA_IN_INPUT_OBSERVABLE = {fake: 'data'};

describe('RequestWrapperComponent', () => {

  let fixture: ComponentFixture<RequestWrapperComponent>;

  beforeEach(() => MockBuilder(RequestWrapperComponent, RequestWrapperModule));
  beforeEach(() => fixture = MockRender(RequestWrapperComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should clear error and turn on loading on request update', () => {
    fixture.componentInstance.error = 'Something not falsy';
    fixture.detectChanges();
    fixture.componentInstance.ngOnChanges();
    expect(fixture.componentInstance.error).toBeNull();
    expect(fixture.componentInstance.isLoading).toBe(true);
  });

  it('should call update request fn and pass request through async pipe', done => {
    spyOn(fixture.componentInstance, 'getUpdatedStream').and.returnValue(of(FAKE_DATA_IN_INPUT_OBSERVABLE).pipe(finalize(() => done())));
    expect(fixture.componentInstance.getUpdatedStream).not.toHaveBeenCalled();
    fixture.componentInstance.request$ = of(FAKE_DATA_IN_INPUT_OBSERVABLE);
    fixture.detectChanges();
    fixture.componentInstance.ngOnChanges();
    expect(fixture.componentInstance.getUpdatedStream).toHaveBeenCalled();
  });

  it('should call onDataLoaded fn after request successfully completed', () => {
    spyOn(fixture.componentInstance, 'onDataLoaded');
    fixture.componentInstance.request$ = of(FAKE_DATA_IN_INPUT_OBSERVABLE);
    fixture.detectChanges();
    fixture.componentInstance.ngOnChanges();
    expect(fixture.componentInstance.onDataLoaded).toHaveBeenCalledWith(FAKE_DATA_IN_INPUT_OBSERVABLE);
  });

  it('should display content on called onDataLoaded fn', () => {
    fixture.componentInstance.onDataLoaded(FAKE_DATA_IN_INPUT_OBSERVABLE);
    fixture.componentInstance.cdr.markForCheck();
    fixture.detectChanges();
    expect(ngMocks.find(ngMocks.find(NzSpinComponent), 'div')).toBeTruthy();
  })
});
