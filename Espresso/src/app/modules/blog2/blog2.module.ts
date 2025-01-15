import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog2Component } from './blog2/blog2.component';
import { blog2router } from './blog2router';



@NgModule({
  declarations: [
    Blog2Component
  ],
  imports: [
    CommonModule,
    blog2router,
  ]
})
export class Blog2Module { }
