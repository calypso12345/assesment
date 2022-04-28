import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperandContainerComponent } from './operand.container';
import { OperandComponent } from './operand.component';
import { OperandRoutingModule } from './operand-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from 'src/app/shared/store/store.service';

@NgModule({
  declarations: [
    OperandContainerComponent,
    OperandComponent
  ],
  imports: [
    CommonModule,
    OperandRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreService],
  bootstrap : [OperandContainerComponent]
})
export class OperandModule { }
