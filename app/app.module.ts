import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RegformComponent }  from './regform/regform.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, RegformComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
