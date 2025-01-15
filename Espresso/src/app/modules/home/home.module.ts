import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { homerouter } from './home.router';
import { HeaderModule } from "../header/header.module";



@NgModule({
  declarations: [
    ViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    homerouter,
    HeaderModule
]
})
export class HomeModule { }
