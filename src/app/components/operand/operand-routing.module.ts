import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperandContainerComponent } from './operand.container';

const routes: Routes = [
  {
    path: '',
    component: OperandContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperandRoutingModule { }
