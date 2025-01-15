import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { PaintingModule } from './modules/painting/painting.module';
import { HeaderModule } from "./modules/header/header.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    PaintingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    HeaderModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
