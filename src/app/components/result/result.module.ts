import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultContainerComponent } from './result.container';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from 'src/app/shared/store/store.service';

@NgModule({
  declarations: [
    ResultContainerComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreService],
  bootstrap : [ResultContainerComponent]
})
export class ResultModule { }
