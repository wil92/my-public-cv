import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Template3Component} from './template3.component';
import {CurriculumResolver} from '../../../core/resolvers';

const routes: Routes = [
  {
    path: '',
    component: Template3Component,
    resolve: {curriculum: CurriculumResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CurriculumResolver],
  exports: [RouterModule]
})
export class Template3RoutingModule {
}
