import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PrivacyComponent } from "./privacy/privacy.component";



const privacyRoutes:Routes=[
    {path:'',component:PrivacyComponent,}
];
@NgModule({
    imports:[RouterModule.forChild(privacyRoutes)],
    exports: [RouterModule],
})
export class privacyrouter{}