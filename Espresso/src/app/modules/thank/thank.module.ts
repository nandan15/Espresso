import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankComponent } from './thank/thank.component';
import { thankrouter } from './thank.router';



@NgModule({
  declarations: [
    ThankComponent
  ],
  imports: [
    CommonModule,
    thankrouter,
  ]
})
export class ThankModule { }
