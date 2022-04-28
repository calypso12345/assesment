import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperationsContainerComponent } from './operations.container';

const routes: Routes = [
  {
    path: '',
    component: OperationsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
