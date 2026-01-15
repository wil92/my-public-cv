import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ENVIRONMENT, WINDOW, windowFactory} from './core/config';
import {environment} from '../environments/environment';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        MarkdownModule.forRoot(),
        FontAwesomeModule], providers: [
        { provide: WINDOW, useFactory: windowFactory },
        { provide: ENVIRONMENT, useValue: environment },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {
}
