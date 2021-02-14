import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MenuComponent} from './menu/menu.component';
import {ContentfulResolver} from '../../core/resolvers/contentful.resolver';
import {CurriculumResolver} from '../../core/resolvers';
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MarkdownModule
  ],
  providers: [ContentfulResolver, CurriculumResolver]
})
export class HomeModule {
}
