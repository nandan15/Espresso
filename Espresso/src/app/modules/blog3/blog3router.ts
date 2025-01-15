import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Blog3Component } from "./blog3/blog3.component";


const blog3Routes:Routes=[
    {path:'',component:Blog3Component,}
];
@NgModule({
    imports:[RouterModule.forChild(blog3Routes)],
    exports: [RouterModule],
})
export class blog3router{}