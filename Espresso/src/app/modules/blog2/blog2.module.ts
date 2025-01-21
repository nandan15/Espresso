import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog2Component } from './blog2/blog2.component';
import { blog2router } from './blog2router';
import { HeaderModule } from "../header/header.module";
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    Blog2Component
  ],
  imports: [
    CommonModule,
    blog2router,
    HeaderModule,
    FooterModule,
]
})
export class Blog2Module { }
