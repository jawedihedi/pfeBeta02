import { FormationService } from './../formation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: FormationService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nameFormation: ['', Validators.required ],
      type: ['', Validators.required ],
      nb: ['', Validators.required ]
    });
  }

  addBusiness(nameFormation, type, nb) {
    this.bs.addBusiness(nameFormation, type, nb);
  }

  ngOnInit() {
  }

}
