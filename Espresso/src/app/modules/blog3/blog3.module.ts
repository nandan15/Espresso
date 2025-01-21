import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog3Component } from './blog3/blog3.component';
import { blog3router } from './blog3router';
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    Blog3Component
  ],
  imports: [
    CommonModule,
    blog3router,
    FooterModule,
    HeaderModule,
]
})
export class Blog3Module { }
