import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexModule} from '@angular/flex-layout';

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
    FontAwesomeModule
  ]
})
export class HomeModule { }
