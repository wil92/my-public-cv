import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Template1Component} from './template1.component';
import {CurriculumResolver} from '../../../core/resolvers';

const routes: Routes = [
  {
    path: '',
    component: Template1Component,
    resolve: {curriculum: CurriculumResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CurriculumResolver],
  exports: [RouterModule]
})
export class Template1RoutingModule {
}
