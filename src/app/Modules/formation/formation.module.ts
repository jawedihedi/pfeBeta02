import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { CRUDComponent } from './crud/crud.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormItemComponent } from './form-item/form-item.component';

@NgModule({
  declarations: [CRUDComponent, FormListComponent, FormItemComponent],
  imports: [
    CommonModule,
    FormationRoutingModule
  ]
})
export class FormationModule { }
