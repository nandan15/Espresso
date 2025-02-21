import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { GetquoteComponent } from "./getquote/getquote.component";




const getquoteRoutes:Routes=[
    {path:'',component:GetquoteComponent}
];
@NgModule({
    imports:[RouterModule.forChild(getquoteRoutes)],
    exports:[RouterModule],
})
export class getquoterouter {}