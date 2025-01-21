import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallPanelingComponent } from './wall-paneling/wall-paneling.component';
import { wallpanelingrouter } from './wall-paneling.router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    WallPanelingComponent
  ],
  imports: [
    CommonModule,
    wallpanelingrouter,
    HeaderModule,
    FooterModule,
  ]
})
export class WallPanelingModule { }
