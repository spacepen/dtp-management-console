/**
 * Created by tomda on 07.02.2018.
 */
import {Injectable} from "@angular/core";
import {BaThemeConfigProvider, colorHelper} from '../../theme';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesService{

  transactionCount: any;
  quBlockCount: any;
  chBlockCount: any;
  ibdBlockCount: any;
  voteCount: any;
  removedTransactionCount: any;
  removedQuBlockCount: any;
  stats: any;

  constructor(private _http: Http, private _baConfig:BaThemeConfigProvider){}


  getTrafficData(){

    return this._http.get('http://localhost:8080/dtp/mc/nodewatch/stats').map(res => res.json());

  }

  /*makeTrafficValues(){
    let dashboardColors = this._baConfig.get().colors.dashboard;

    return [
      {
        value: this.transactionCount,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Pool Transactions Count',
        order: 1,
      }, {
        value: this.quBlockCount,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Queue Block Count',
        order: 4,
      },{
        value: this.chBlockCount,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Chain Block Count',
        order: 3,
      }, {
        value: this.ibdBlockCount,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Ibd Block Count',
        order: 2,
      }, {
        value: this.voteCount,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Vote Count',
        order: 0,
      }, {
        value: this.removedTransactionCount,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Removed Pool Transaction Count',
        order: 5,
      }, {
        value: this.removedQuBlockCount,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Removed Queue Block Count',
        order: 6,
      }
    ];
  }*/

  getTest(){

    return this._http.get('http://localhost:8080/dtp/mc/nodewatch/stats').map(res => res.json());
  }
}
