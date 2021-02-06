import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./template3').then(m => m.Template3Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {
}
