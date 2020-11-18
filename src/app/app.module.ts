import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HTTP404Component } from './http404/http404.component';
import { FooterComponent } from './footer/footer.component';
import { CaptionPipe } from './caption.pipe';
import { StringFilterPipe } from './string-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HTTP404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
