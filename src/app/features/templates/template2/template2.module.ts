import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {MarkdownModule} from 'ngx-markdown';

import {Template2Component} from './template2.component';
import {Template2RoutingModule} from './template2-routing.module';

@NgModule({
  declarations: [Template2Component],
  imports: [
    CommonModule,
    Template2RoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule
  ]
})
export class Template2Module {
}
