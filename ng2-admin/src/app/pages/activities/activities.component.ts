/**
 * Created by tomda on 28.01.2018.
 */
import { Component, AfterViewInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import * as Chart from 'chart.js';
import {BaThemeConfigProvider, colorHelper} from '../../theme';


@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styleUrls: ['./activities.scss'],
  providers: [ActivitiesService]
})


export class ActivitiesComponent implements AfterViewInit {

  lineData: any;
  dates = [];
  private _data: any;
  entityLength = 0;
  currentTime: any;
  timestampValue1: any;
  timestampValue2: any;
  timestampValue3: any;
  timestampArray = [];
  statsTransArray = [];
  transEntitieArray = [];
  newPoolTrans: any;
  newQuBlocks: any;
  newChBlocks: any;
  newIbdBlocks: any;
  newVotes: any;
  removedPoolTrans: any;
  removedQuBlocks: any;

  constructor(private _httpService: ActivitiesService, private _baConfig: BaThemeConfigProvider) {
  }

  ngOnInit() {
    this.getActivitiesCount();
    this.getLineDataNew();
    this.makeGraph();
    //this.getCurrentTimestamp();
  }

  ngAfterViewInit() {
    //this.initChart();
  }

  getActivitiesCount() {
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          this.newPoolTrans = res.newPoolTransactionCount;
          this.newQuBlocks = res.newQueueBlockCount;
          this.newChBlocks = res.newChainBlockCount;
          this.newIbdBlocks = res.newIbdBlockCount;
          this.newVotes = res.newVoteCount;
          this.removedPoolTrans = res.removedPoolTransactionCount;
          this.removedQuBlocks = res.removedQueueBlockCount;
        },
        () => console.log("Finished")
      )
  }

  /*getCurrentTimestamp(){
    this.currentTime = new Date().getTime();
    //console.log("Current Timestamp: "+this.currentTime);
  }

  calcTimestamp(){
    this.timestampValue1 = ((this.currentTime - 1518591067588) / 1000) / 1000;
    console.log("Timestamp Value1: "+this.timestampValue1);
    this.timestampValue2 = ((this.currentTime - 1518591058830) / 1000) / 1000;
    console.log("Timestamp Value2: "+this.timestampValue2);
    this.timestampValue3 = ((this.currentTime - 1518591057129) / 1000) / 1000;
    console.log("Timestamp Value3: "+this.timestampValue3);

    this.timestampArray[0] = 0;
    this.timestampArray[1] = this.timestampValue1;
    this.timestampArray[2] = this.timestampValue2;
    this.timestampArray[3] = this.timestampValue3;
    console.log("Timestamp Array: "+this.timestampArray);

    this.lineData = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '300px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu'],
        series: [
          this.timestampArray
        ]
      }
    };

  }*/

  makeGraph() {

    console.log("makeGraph()");

      this.lineData = {
        simpleLineOptions: {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '500px',
          chartPadding: {
            right: 40
          }
        },
        simpleLineData: {
          labels: [""+this.dates[0], ""+this.dates[10], ""+this.dates[20], ""+this.dates[30], ""+this.dates[40]],
          series: [
            [this.transEntitieArray[0], this.transEntitieArray[10], this.transEntitieArray[20], this.transEntitieArray[30],
              this.transEntitieArray[40]]
          ]
        }
      };
  }

  /*updateGraph() {
    this.lineData = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '300px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [30, 10, 18, 35, 47]
        ]
      }
    };
  }*/


  /*getResponsive(padding, offset) {
    return this._httpService.getResponsive(padding, offset);
  }*/

  getLineDataNew(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newPoolTransactions'].map(res => res.timestamp);
          let entity = res['newPoolTransactions'].map(res => res.entities);
          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          let length = this.dates['length'];
          console.log(length);
          for (var i = 0; i < 41; i++){

            this.transEntitieArray.push(i);
          }
          console.log(this.transEntitieArray);
          console.log(this.dates[0]);

          this.makeGraph();

        });
  }



}
