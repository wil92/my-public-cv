import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule, TranslateService
} from '@ngx-translate/core';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {I18nService} from './core/services/i18n.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return params.key;
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [TranslateModule],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      }
    }),
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    I18nService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: I18nService) {
    const options = environment.cvLangs;
    if (options) {
      const langs = options
        .split('"')
        .join('')
        .split(' ')
        .map((lang) => {
          const code = lang.split(',')[0];
          const name = lang.split(',')[1];
          return {
            code,
            name
          };
        });

      translate.addLangs(langs.map((lang) => lang.code));
      const browserLang = translate.getBrowserLang();
      const defaultLang = translate.langs.includes(browserLang) ? browserLang : 'en';
      translate.setDefaultLang(defaultLang);
      translate.use('es');
    }
  }
}
