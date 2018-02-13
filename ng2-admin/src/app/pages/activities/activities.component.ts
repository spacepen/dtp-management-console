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

  chart = [];
  statsTransArray = [];
  transEntitieArray = [];
  newPoolTransEntitieArray = [];
  newPoolTransTimestampArray = [];
  transDate: any;
  newPoolTrans: any;
  newQuBlocks: any;
  newChBlocks: any;
  newIbdBlocks: any;
  newVotes: any;
  removedPoolTrans: any;
  removedQuBlocks: any;
  chartData: Object;
  chart1: any;
  lineTimestamp: any;
  lineEntities: any;

  constructor(private _httpService:ActivitiesService){}

  ngOnInit() {
    this.getActivitiesCount();
    this.getLineDataNew();
    //this.getLineData();
  }

  ngAfterViewInit(){
    //this.initChart();
  }

  getActivitiesCount(){
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

  getLineDataNew(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newPoolTransactions'].map(res => res.timestamp);
          let entity = res['newPoolTransactions'].map(res => res.entities);
          let length = entity['length'];

          let dates = [];
          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          console.log(dates);
          console.log(length);

          this.chart = new Chart('canvas', {
            type:'line',
            data: {
              labels: dates,
              datasets: [
                {
                  data: length,
                  borderColor: '#00abff',
                  fill: false
                }
              ]
            },
            options: {
              legend:{
                display: false
              },
              scales:{
                xAxes: [{
                  display: true
                }],
                yAxes:[{
                  display: true
                }]
              }
            }
          })

        }
        )
  }

  /*getLineData(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          this.statsTransArray = res.newPoolTransactions;
          var length = this.statsTransArray["length"];
          for (var i = 0; i < length; i++){

            this.newPoolTransTimestampArray[i] = this.statsTransArray[i].timestamp;
            var d = new Date(this.newPoolTransTimestampArray[i]);
            var formattedDate = d.getDate() + "-" + (d.getMonth()+1)+ "-" +  d.getFullYear();
            var hours = (d.getHours()<10) ? "0" + d.getHours() : d.getHours();
            //var minutes = (d.getMinutes()<10) ? "0" + d.getMinutes() : d.getMinutes;
            var formattedTime = hours + "h";
            formattedDate = formattedDate + " " + formattedTime;
            this.transDate = formattedDate;
            this._httpService.lineDate = this.transDate;

            this.newPoolTransEntitieArray[i] = this.statsTransArray[i].entities;
            var entitieLength = this.newPoolTransEntitieArray["length"];

            for (var j = 0; j < entitieLength; j++){
              this.transEntitieArray[i] = this.newPoolTransEntitieArray[i].length;
              this._httpService.lineValue = this.transEntitieArray[i];
            }
          }
          console.log(this.statsTransArray);
          console.log(this.newPoolTransTimestampArray);
          console.log(this.newPoolTransEntitieArray);
          console.log(this.transEntitieArray);
          console.log(this._httpService.lineDate);
          console.log(this._httpService.lineValue);
        }
      )
  }*/

  /*initChart() {
    this.chartData = this._httpService.getLineData();
    /!*let zoomChart = () => {
      this.chart1.zoomToDates(this._httpService.lineDate);
    };

    this.chart1.addListener('rendered', zoomChart);
    zoomChart();

    if (this.chart1.zoomChart) {
      this.chart1.zoomChart();
    }*!/
  }*/


}
