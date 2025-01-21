import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { paintingrouter } from './painting.router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    PaintingComponent
  ],
  imports: [
    CommonModule,
    paintingrouter,
    HeaderModule,
    FooterModule
  ],
   exports:[
       PaintingComponent,
      ]
})
export class PaintingModule { }
