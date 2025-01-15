import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { paintingrouter } from './painting.router';



@NgModule({
  declarations: [
    PaintingComponent
  ],
  imports: [
    CommonModule,
    paintingrouter,
  ],
   exports:[
       PaintingComponent,
      ]
})
export class PaintingModule { }
