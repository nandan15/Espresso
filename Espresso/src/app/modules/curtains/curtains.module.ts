import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurtainsComponent } from './curtains/curtains.component';
import { curtainsrouter } from './curtains.router';



@NgModule({
  declarations: [
    CurtainsComponent
  ],
  imports: [
    CommonModule,
    curtainsrouter,
  ]
})
export class CurtainsModule { }
