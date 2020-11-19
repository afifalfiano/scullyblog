import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HTTP404Component } from './http404/http404.component';
import { FooterComponent } from './footer/footer.component';
import { CaptionPipe } from './caption.pipe';
import { StringFilterPipe } from './string-filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HTTP404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
