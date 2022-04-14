import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email="";
  password="";
  constructor(private api:ApiService,private router:Router) { }

  signin(){
    var user = {
      email : this.email,
      password : this.password 
    }

    this.api.signin(user).subscribe(data=>{
      console.log(data);
      if(data.status == "Login Success"){
        this.router.navigate(['/add-category']);
        localStorage.setItem("jwt-token",data.token);
      }
      else{
        alert("Invalid Credentials");
      }
    });
  }

  ngOnInit(): void {
  }

}