import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponents} from "./navbar/navbar.components";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
