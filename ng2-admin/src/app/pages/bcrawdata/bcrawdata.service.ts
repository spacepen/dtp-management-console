import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BcRawDataService{
  constructor(private _http: Http){}

  getBcData(){

    return this._http.get('http://localhost:8080/dtp/mc/adminarea/bcraw').map(res => res.json());
  }
}
