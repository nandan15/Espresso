import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog1Component } from './blog1/blog1.component';
import { blog1router } from './blog1.router';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from "../header/header.module";




@NgModule({
  declarations: [
    Blog1Component
  ],
  imports: [
    CommonModule,
    blog1router,
    FooterModule,
    HeaderModule,
    FooterModule
]
})
export class Blog1Module { }
