import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient ) { }

  public checkToken(){
    return !!localStorage.getItem("jwt-token");
  }

  signup(user:any):Observable<any>{
    var api = "https://node-api-by-mahak.herokuapp.com/signup";
    return this.http.post(api,user);
  }

  signin(user:any):Observable<any>{
    var api = "https://node-api-by-mahak.herokuapp.com/signin";
    return this.http.post(api,user);
  }

  addCategory(formData:FormData):Observable<any>{
    var api = "https://node-api-by-mahak.herokuapp.com/add-category";
    return this.http.post(api,formData);
  }

  viewCategory():Observable<any>{
    var api = "https://node-api-by-mahak.herokuapp.com/view-category";
    return this.http.get(api);
  }
  deleteCategory(cid:string,image:string):Observable<any>{
    var api = "https://node-api-by-mahak.herokuapp.com/delete-category";
    return this.http.post(api+"/"+cid,{image:image});
  }
}
