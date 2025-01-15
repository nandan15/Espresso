import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { projectrouter } from './project.router';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    projectrouter,
  ]
})
export class ProjectModule { }
