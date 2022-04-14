import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name="";
  email="";
  password="";
  constructor(private api:ApiService) { }

  signup(){
      var user = {
        name : this.name,
        email : this.email,
        password : this.password
      }
      this.api.signup(user).subscribe(data=>{
        console.log(data);
      });
  }

  ngOnInit(): void {
  }

}
