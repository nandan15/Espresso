import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog3Component } from './blog3/blog3.component';
import { blog3router } from './blog3router';



@NgModule({
  declarations: [
    Blog3Component
  ],
  imports: [
    CommonModule,
    blog3router,
  ]
})
export class Blog3Module { }
