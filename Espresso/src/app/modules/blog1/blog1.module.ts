import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog1Component } from './blog1/blog1.component';
import { blog1router } from './blog1.router';



@NgModule({
  declarations: [
    Blog1Component
  ],
  imports: [
    CommonModule,
    blog1router,
  ]
})
export class Blog1Module { }
