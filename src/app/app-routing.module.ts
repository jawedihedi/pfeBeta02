import { Page404Component } from './core/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


<<<<<<< HEAD
 const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: Page404Component} 
];

 @NgModule({
=======
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
>>>>>>> 821670774c7530f8efced7f5a5e83cc217b58813
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

<<<<<<< HEAD
 }
=======
}
>>>>>>> 821670774c7530f8efced7f5a5e83cc217b58813
