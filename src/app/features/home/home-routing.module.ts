import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {ContentfulResolver} from '../../core/resolvers/contentful.resolver';
import {CurriculumResolver} from '../../core/resolvers';
import {ContentNames} from '../../core/contentful/content-names';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {contentfulResolver: ContentfulResolver, cv: CurriculumResolver},
    data: {
      contentful: [ContentNames.MY_CV_HOME]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
