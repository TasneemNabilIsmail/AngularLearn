import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { ChildComponent } from './view-content-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContentChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
