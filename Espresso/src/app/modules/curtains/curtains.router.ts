import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CurtainsComponent } from "./curtains/curtains.component";



const curtainsRoutes:Routes=[
    {path:'',component:CurtainsComponent}
];
@NgModule({
    imports:[RouterModule.forChild(curtainsRoutes)],
    exports:[RouterModule],
})
export class curtainsrouter {}