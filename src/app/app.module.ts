import { NgModule }                from '@angular/core';
import { registerLocaleData }      from '@angular/common';
import { HttpClientModule }        from '@angular/common/http';
import en                          from '@angular/common/locales/en';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US }          from 'ng-zorro-antd/i18n';
import { AppComponent }            from './app.component';

registerLocaleData(en);

const BROWSER_MODULES = [
  BrowserModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    HttpClientModule,
    BROWSER_MODULES
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
