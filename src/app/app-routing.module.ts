import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'operations',
    loadChildren: () => import('./components/operations/operations.module').then(m => m.OperationsModule)
  },
  {
    path: 'operand',
    loadChildren: () => import('./components/operand/operand.module').then(m => m.OperandModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./components/result/result.module').then(m => m.ResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
