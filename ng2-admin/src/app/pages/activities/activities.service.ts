/**
 * Created by tomda on 07.02.2018.
 */
import {Injectable} from "@angular/core";
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../theme';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesService{

  lineDate: any;
  lineValue: any;
  lineValue0: any;


  constructor(private _http: Http, private _baConfig:BaThemeConfigProvider){}


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
