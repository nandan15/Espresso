import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetquoteComponent } from './getquote/getquote.component';
import { getquoterouter } from './getquoterouter';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GetquoteComponent
  ],
  imports: [
    CommonModule,
    getquoterouter,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    GetquoteComponent
  ]
})
export class GetquoteModule { }
