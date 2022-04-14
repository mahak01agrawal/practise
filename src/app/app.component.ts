import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd1';
  constructor(private api:ApiService,private router:Router){}
  isLoggedIn():boolean{
    if(this.api.checkToken())
      return true;
    else
      return false;
  }

  signOut(){
    localStorage.removeItem("jwt-token");
    this.router.navigate(["/signin"]);
  }
}
