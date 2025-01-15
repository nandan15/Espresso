import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallPanelingComponent } from './wall-paneling/wall-paneling.component';
import { wallpanelingrouter } from './wall-paneling.router';



@NgModule({
  declarations: [
    WallPanelingComponent
  ],
  imports: [
    CommonModule,
    wallpanelingrouter,
  ]
})
export class WallPanelingModule { }
