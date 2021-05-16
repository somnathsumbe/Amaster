import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { RagisterComponent } from './ragister/ragister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { Child1Component } from './subject/child1/child1.component';
import { Child2Component } from './subject/child2/child2.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';



@NgModule({
  declarations: [RagisterComponent, SubjectComponent, Child1Component, Child2Component, FormvalidationComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule {
  constructor() {
    console.log("ReactiveModule  load ");
  }
}
