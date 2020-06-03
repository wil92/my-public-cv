import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {Template1Component} from './template1.component';
import {Template1RoutingModule} from './template1-routing.module';

@NgModule({
  declarations: [Template1Component],
  imports: [
    CommonModule,
    Template1RoutingModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class Template1Module {
}
