import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../commanComponent/page404/page404.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { RagisterComponent } from './ragister/ragister.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
   { path: "reactive", component:RagisterComponent },
  { path: "subject", component: SubjectComponent },
  { path: "validation", component: FormvalidationComponent}
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule {

}
