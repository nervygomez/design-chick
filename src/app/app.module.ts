import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
