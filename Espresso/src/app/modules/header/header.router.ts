import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

const headerRoutes:Routes=[
    {path:'header',component:HeaderComponent}
];
@NgModule({
    imports:[RouterModule.forChild(headerRoutes)],
       exports:[RouterModule],
   })
   export class headergrouter {}