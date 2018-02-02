/**
 * Created by tomda on 01.02.2018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService{
  constructor(private _http: Http){}

  postTest(){
    var json = JSON.stringify({var1: 'test', var2: 3});
    var params = 'json= ' + json;

    return this._http.post('http://validate.jsontest.com/?json=[JSON-code-to-validate]', params, {}).map(res => res.json());
  }

  getTest(){
    return this._http.get('http://date.jsontest.com')
      .map(res => res.json());
  }
}
