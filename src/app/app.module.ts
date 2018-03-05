import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';

import { AppComponent, customExceptionHandlerProvider } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DevExtremeModule
  ],
  providers: [ customExceptionHandlerProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
