import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./template2').then(m => m.Template2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {
}
