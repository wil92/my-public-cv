import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexModule,
    FontAwesomeModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
