import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ngrx 
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from './shared/store/store.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    NgbModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
