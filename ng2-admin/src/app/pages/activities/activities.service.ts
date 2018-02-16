/**
 * Created by tomda on 07.02.2018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesService{


  constructor(private _http: Http){}


  getTrafficData(){

    return this._http.get('http://localhost:8080/dtp/mc/nodewatch/stats').map(res => res.json());

  }

  /*public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }*/

}
