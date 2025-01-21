import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { headergrouter } from './header.router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    headergrouter,
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
