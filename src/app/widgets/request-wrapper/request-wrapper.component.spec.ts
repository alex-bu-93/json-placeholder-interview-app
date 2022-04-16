import { ComponentFixture }        from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { RequestWrapperComponent } from './request-wrapper.component';
import { RequestWrapperModule }    from './request-wrapper.module';

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
    fixture.detectChanges();
    expect(fixture.componentInstance.error).toBeNull();
    expect(fixture.componentInstance.isLoading).toBe(true);
  });
});
