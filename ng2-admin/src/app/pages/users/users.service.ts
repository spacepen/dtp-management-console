import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
  constructor(private _http: Http){}

  getUserData(){

    return this._http.get('http://localhost:8080/dtp/mc/adminarea/users').map(res => res.json());
  }
}
