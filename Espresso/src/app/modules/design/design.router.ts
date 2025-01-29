import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DesignComponent } from "./design/design.component";




const designRoutes:Routes=[
    {path:'',component:DesignComponent}
];
@NgModule({
    imports:[RouterModule.forChild(designRoutes)],
    exports:[RouterModule],
})
export class designrouter {}