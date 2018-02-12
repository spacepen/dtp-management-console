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


export class ActivitiesComponent  {

  chart = [];

  public doughnutData: Array<Object>;
  stats: any;
  traffic: any;
  transactionCount: any;
  quBlockCount: any;
  chBlockCount: any;
  ibdBlockCount: any;
  voteCount: any;
  removedTransactionCount: any;
  removedQuBlockCount: any;
  canvas: any;
  ctx: any;
  statsArray = [];

  constructor(private _httpService:ActivitiesService){}

  ngOnInit() {
    this.onTestGet();
    this.getActivitiesCount();
  }

  getActivitiesCount(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          this.statsArray = res;
          console.log("statsArray: "+this.statsArray);
        },
        () => console.log("Finished")
      )
  }

  onTestGet() {
    this._httpService.getTrafficData()
      .subscribe(
        data => {

          let newPoolTransactionCount = data.newPoolTransactionCount;
          let quBlockCount = data.newQueueBlockCount;
          let chBlockCount = data.newChainBlockCount;
          //console.log(newPoolTransactionCount);

          this.canvas = document.getElementById('doughnut');
          this.ctx = this.canvas.getContext('2d');

          this.chart = new Chart('doughnut', {
            type: 'doughnut',
            data: {
              labels: ['Hallo'],
              datasets: [
                {
                  data: newPoolTransactionCount,
                  backgroundColor: '#00abff'
                },
                {
                  data: quBlockCount,
                  backgroundColor: '#000000'
                },
                {
                  data: chBlockCount,
                  backgroundColor: '#739573'
                }
              ]
            },
            options: {
              cutoutPercentage: 50,
              rotation: -0.5 * Math.PI,
              circumference: 2 * Math.PI,
              display: true
            }
          });
          /*this.transactionCount = data.newPoolTransactionsCount;
          this.quBlockCount = data.newQueueBlockCount;
          this.chBlockCount = data.newChainBlockCount;
          this.ibdBlockCount = data.newIbdBlockCount;
          this.voteCount = data.newVoteCount;
          this.removedTransactionCount = data.removedPoolTransactionCount;
          this.removedQuBlockCount = data.removedQueueBlockCount;*/
        },
        error => alert(error),
        () => console.log("Finished ")
      );
  }

  /*values(){
    this._httpService.transactionCount = this.transactionCount;
    this._httpService.quBlockCount = this.quBlockCount;
    this._httpService.chBlockCount = this.chBlockCount;
    this._httpService.ibdBlockCount = this.ibdBlockCount;
    this._httpService.voteCount = this.voteCount;
    this._httpService.removedTransactionCount = this.removedTransactionCount;
    this._httpService.removedQuBlockCount = this.removedQuBlockCount;
  }

  private _loadDoughnutCharts() {
    this.doughnutData = this._httpService.makeTrafficValues();
    console.log(this.doughnutData);
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }*/


}
