import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { blogrouter } from './blog.router';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    blogrouter
  ]
})
export class BlogModule { }
