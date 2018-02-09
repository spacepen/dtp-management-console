/**
 * Created by tomda on 07.02.2018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesService{
  constructor(private _http: Http){}

  /*getTest(query = {}) {
    return this._http.get('http://10.0.0.8:8080/dtp/mc/nodewatch/metadata/{newPoolTransactionCount}')
      .filter((value: any) => {
          console.log(value)
          if (query["newPoolTransactionCount"])
          return true;
      })
  }*/

  getTest(){

    return this._http.get('http://10.0.0.8:8080/dtp/mc/nodewatch/stats?newPoolTransactionCount=0').map(res => res.json());
  }
}
