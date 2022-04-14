import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private api:ApiService,private router:Router){}
  canActivate()
  {
    if(this.api.checkToken())
      return true;
    else  
    {
      this.router.navigate(["signin"]);
      return false;
    }
  }
  
}
