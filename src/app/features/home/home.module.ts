import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MenuComponent} from './menu/menu.component';
import {ContentfulResolver} from '../../core/resolvers/contentful.resolver';
import {CurriculumResolver} from '../../core/resolvers';

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
    FlexLayoutModule
  ],
  providers: [ContentfulResolver, CurriculumResolver]
})
export class HomeModule {
}
