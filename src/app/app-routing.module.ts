import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ReactiveRoutingModule } from './reactive/reactive-routing.module';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "reactive", loadChildren:()=>import('./reactive/reactive.module').then(m=>m.ReactiveModule)},
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveRoutingModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
