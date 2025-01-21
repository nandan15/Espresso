import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurtainsComponent } from './curtains/curtains.component';
import { curtainsrouter } from './curtains.router';
import { HeaderModule } from "../header/header.module";
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    CurtainsComponent
  ],
  imports: [
    CommonModule,
    curtainsrouter,
    HeaderModule,
    FooterModule,
]
})
export class CurtainsModule { }
