import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RagisterComponent } from './ragister/ragister.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [


  // {
  //   path: "", component: RagisterComponent, children: [
  //     { path: "", redirectTo: "subject", pathMatch: "full" },
  //     { path: "subject", component: SubjectComponent },
  //   ]
  // },

  
  { path: "", redirectTo: "reactive",pathMatch: "full" },
  { path: "", component:RagisterComponent,  },
  { path: "subject", component: SubjectComponent },

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule {
  constructor() {
    console.log("ReactiveRoutingModule load ...")
  }
}
