import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import {  HomeRoutingModule } from './home.router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { DesignModule } from '../design/design.module';
import { GetquoteModule } from "../getquote/getquote.module";


@NgModule({
  declarations: [
    ViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    DesignModule,
    GetquoteModule
],
exports: [ 
  ViewComponent
 
]
})
export class HomeModule { }
