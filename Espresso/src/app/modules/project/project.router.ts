import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ProjectComponent } from "./project/project.component";

const projectRoutes:Routes=[
    {path:'',component:ProjectComponent,}
];
@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    exports:[RouterModule],
})
export class projectrouter {}
