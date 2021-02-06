import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {Template3Component} from './template3.component';
import {Template3RoutingModule} from './template3-routing.module';

@NgModule({
  declarations: [Template3Component],
  imports: [
    CommonModule,
    Template3RoutingModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class Template3Module {
}
