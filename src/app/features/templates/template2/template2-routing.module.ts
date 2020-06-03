import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Template2Component} from './template2.component';
import {CurriculumResolver} from '../../../core/resolvers';

const routes: Routes = [
  {
    path: '',
    component: Template2Component,
    resolve: {curriculum: CurriculumResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CurriculumResolver],
  exports: [RouterModule]
})
export class Template2RoutingModule {
}
