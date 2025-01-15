import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PaintingComponent } from "./painting/painting.component";


const paintingRoutes:Routes=[
    {path:'',component:PaintingComponent}
];
@NgModule({
    imports:[RouterModule.forChild(paintingRoutes)],
    exports:[RouterModule],
})
export class paintingrouter {}