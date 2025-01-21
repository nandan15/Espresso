import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ThankComponent } from "./thank/thank.component";




const thankRoutes:Routes=[
    {path:'',component:ThankComponent,}
];
@NgModule({
    imports:[RouterModule.forChild(thankRoutes)],
    exports: [RouterModule],
})
export class thankrouter{}