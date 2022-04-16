import { ComponentFixture }                  from '@angular/core/testing';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import { GridModule }                        from '@widgets/grid/grid.module';
import { AgGridAngular }                     from 'ag-grid-angular';
import { MockBuilder, MockRender, ngMocks }  from 'ng-mocks';
import { GridComponent }                     from './grid.component';

describe('GridComponent', () => {

  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => MockBuilder(GridComponent, GridModule).mock(BrowserAnimationsModule));
  beforeEach(() => fixture = MockRender(GridComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should update info on special grid emits', () => {
    spyOn(fixture.componentInstance, 'updateInfo');
    ngMocks.find(AgGridAngular).componentInstance.rowDataUpdated.emit();
    ngMocks.find(AgGridAngular).componentInstance.rowDataChanged.emit();
    ngMocks.find(AgGridAngular).componentInstance.firstDataRendered.emit();
    ngMocks.find(AgGridAngular).componentInstance.filterChanged.emit();
    expect(fixture.componentInstance.updateInfo).toHaveBeenCalledTimes(4);
  });

  it('should contain filters count in clear filters button', () => {
    const FAKE_FILTER_MODEL = {a: 1};
    fixture.componentInstance.gridOptions = {
      api: {getFilterModel: () => FAKE_FILTER_MODEL, forEachNodeAfterFilter: () => {}} as any
    };
    fixture.detectChanges();
    fixture.componentInstance.updateInfo();
    fixture.detectChanges();
    expect(ngMocks.find('button').nativeElement.innerText).toContain('' + Object.keys(FAKE_FILTER_MODEL).length);
  });
});
