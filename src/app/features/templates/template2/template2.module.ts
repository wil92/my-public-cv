import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {Template2Component} from './template2.component';
import {Template2RoutingModule} from './template2-routing.module';

@NgModule({
  declarations: [Template2Component],
  imports: [
    CommonModule,
    Template2RoutingModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class Template2Module {
}
