import { Component, OnInit } from '@angular/core';
 import { User } from '../user';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  register(theUser: User) {
    this.auth.register(theUser).subscribe(data => {
      console.log(data);
    }, (err) => console.log(err));
  }

  ngOnInit() {
  }

}
