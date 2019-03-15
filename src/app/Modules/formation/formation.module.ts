import { FormationService } from './formation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { CRUDComponent } from './crud/crud.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormItemComponent } from './form-item/form-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CRUDComponent, FormListComponent, FormItemComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ FormationService ],
})
export class FormationModule { }
