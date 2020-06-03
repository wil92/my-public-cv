import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../../../environments/environment";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./' + environment.template).then(m => {
        return Object.keys(m).reduce((p, v) => p || m[v], null);
      });
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {
}
