import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { projectrouter } from './project.router';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    projectrouter,
    MatTabsModule,
    HeaderModule,
    FooterModule,
  ]
})
export class ProjectModule { }
