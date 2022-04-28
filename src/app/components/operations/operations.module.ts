import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsContainerComponent } from './operations.container';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from 'src/app/shared/store/store.service';

@NgModule({
  declarations: [
    OperationsContainerComponent,
    OperationsComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreService],
  bootstrap : [OperationsContainerComponent]
})
export class OperationsModule { }
