import { FormListComponent } from './form-list/form-list.component';
import { FormItemComponent } from './form-item/form-item.component';
import { CRUDComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: 'formation/create',
  component: CRUDComponent
},
{
  path: 'formation/edit/:id',
  component: FormItemComponent
},
{
  path: 'formation',
  component: FormListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
