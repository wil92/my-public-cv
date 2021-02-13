import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ENVIRONMENT, WINDOW, windowFactory} from './core/config';
import {HomeComponent} from './features/home/home.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    {provide: WINDOW, useFactory: windowFactory},
    {provide: ENVIRONMENT, useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
