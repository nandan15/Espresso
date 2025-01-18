import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import {  HomeRoutingModule } from './home.router';
@NgModule({
  declarations: [
    ViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
   
],
exports: [ 
  ViewComponent
 
]
})
export class HomeModule { }
