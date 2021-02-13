import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cv-print',
    component: AppComponent,
    loadChildren: () => import('./features/templates').then(m => m.TemplatesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
