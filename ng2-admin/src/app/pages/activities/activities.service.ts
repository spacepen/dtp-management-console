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

  getLineData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;
    console.log(this.lineDate + " " + this.lineValue);

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      dataProvider: [

        { date: this.lineDate, value: this.lineValue },
        { date: this.lineDate, value: this.lineValue },
        { date: this.lineDate, value: this.lineValue },
        { date: this.lineDate, value: this.lineValue },
        { date: this.lineDate, value: this.lineValue }
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.primary,
        axisColor: layoutColors.primaryLight
      },
      valueAxes: [
        {
          minVerticalGap: 1,
          gridAlpha: 0,
          color: layoutColors.primaryDark,
          axisColor: layoutColors.primaryLight
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'DD-MM-YYYY hh'
      /*export: {
        enabled: true
      }*/,
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }

}
