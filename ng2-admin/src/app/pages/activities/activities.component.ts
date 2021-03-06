import { Component, AfterViewInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import {BaThemeConfigProvider, colorHelper} from '../../theme';


@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styleUrls: ['./activities.scss'],
  providers: [ActivitiesService]
})


export class ActivitiesComponent implements AfterViewInit {

  newPoolTrans: any;
  newQuBlocks: any;
  newChBlocks: any;
  newIbdBlocks: any;
  newVotes: any;
  removedPoolTrans: any;
  removedQuBlocks: any;
  lineData: any;
  lineData1: any;
  lineData2: any;
  lineData3: any;
  lineData4: any;
  lineData5: any;
  lineData6: any;
  lastUpdate: any;
  dates = [];
  dates1= [];
  dates2 = [];
  dates3 = [];
  dates4 = [];
  dates5 = [];
  dates6 = [];
  currentTime: any;
  currentDate: any;
  entity = [];
  transEntitieArray = [];
  transEntitieArray1 = [];
  transEntitieArray2 = [];
  transEntitieArray3 = [];
  transEntitieArray4 = [];
  transEntitieArray5 = [];
  transEntitieArray6 = [];
  timestampValue1: any;
  timestampValue2: any;
  timestampValue3: any;
  timestampValue4: any;
  timestampValue5: any;
  timestampValue11: any;
  timestampValue12: any;
  timestampValue13: any;
  timestampValue14: any;
  timestampValue15: any;
  timestampValue21: any;
  timestampValue22: any;
  timestampValue23: any;
  timestampValue24: any;
  timestampValue25: any;
  timestampValue31: any;
  timestampValue32: any;
  timestampValue33: any;
  timestampValue34: any;
  timestampValue35: any;
  timestampValue41: any;
  timestampValue42: any;
  timestampValue43: any;
  timestampValue44: any;
  timestampValue45: any;
  timestampValue51: any;
  timestampValue52: any;
  timestampValue53: any;
  timestampValue54: any;
  timestampValue55: any;
  timestampValue61: any;
  timestampValue62: any;
  timestampValue63: any;
  timestampValue64: any;
  timestampValue65: any;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value11: any;
  value12: any;
  value13: any;
  value14: any;
  value15: any;
  value21: any;
  value22: any;
  value23: any;
  value24: any;
  value25: any;
  value31: any;
  value32: any;
  value33: any;
  value34: any;
  value35: any;
  value41: any;
  value42: any;
  value43: any;
  value44: any;
  value45: any;
  value51: any;
  value52: any;
  value53: any;
  value54: any;
  value55: any;
  value61: any;
  value62: any;
  value63: any;
  value64: any;
  value65: any;

  constructor(private _httpService: ActivitiesService, private _baConfig: BaThemeConfigProvider) {
  }

  ngOnInit() {
    this.getActivitiesCount();
    this.getLineDataNew();
    this.getLineDataQueue();
    this.getLineDataChain();
    this.getLineDataVotes();
    this.getLineDataIbd();
    this.getLineDataRemovedTrans();
    this.getLineDataRemovedQueue();
    this.makeGraph();
    this.makeGraph1();
    this.makeGraph2();
    this.makeGraph3();
    this.makeGraph4();
    this.makeGraph5();
    this.makeGraph6();
    this.getCurrentTimestamp();
  }

  ngAfterViewInit() {

  }


  //Activities Counter
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


  //Current Timestamp (to Date)
  getCurrentTimestamp(){
    this.currentTime = new Date().getTime();
    this.lastUpdate = this.currentTime*1000;

    this.currentDate = new Date(this.currentTime);
    this.currentDate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'});

  }


  //New Pool Transactions
  getLineDataNew(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newPoolTransactions'].map(res => res.timestamp);
          this.entity = res['newPoolTransactions'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue1 = timestamp[i];

            }

            this.timestampValue2 = timestamp[(i+10)];
            this.timestampValue3 = timestamp[(i+20)];
            this.timestampValue4 = timestamp[(i+30)];
            this.timestampValue5 = timestamp[(i+40)];

            this.value1 = this.transEntitieArray[i];
            this.value2 = this.transEntitieArray[(i+10)];
            this.value3 = this.transEntitieArray[(i+20)];
            this.value4 = this.transEntitieArray[(i+30)];
            this.value5 = this.transEntitieArray[(i+40)];

            this.makeGraph();
          }

        });
  }

  makeGraph() {

      this.lineData = {
        simpleLineOptions: {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '350px',
          chartPadding: {
            right: 40
          }
        },
        simpleLineData: {
          labels: [this.timestampValue1, this.timestampValue2, this.timestampValue3,
            this.timestampValue4, this.timestampValue5],
          series: [
            [this.value1, this.value2, this.value3, this.value4, this.value5]
          ]
        }
      };
  }


//New Chain Blocks
  getLineDataChain(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newChainBlocks'].map(res => res.timestamp);
          this.entity = res['newChainBlocks'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates2.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray2.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue21 = timestamp[i];

            }
            this.timestampValue22 = timestamp[(i+10)];
            this.timestampValue23 = timestamp[(i+20)];
            this.timestampValue24 = timestamp[(i+30)];
            this.timestampValue25 = timestamp[(i+40)];

            this.value21 = this.transEntitieArray2[i];
            this.value22 = this.transEntitieArray2[(i+10)];
            this.value23 = this.transEntitieArray2[(i+20)];
            this.value24 = this.transEntitieArray2[(i+30)];
            this.value25 = this.transEntitieArray2[(i+40)];

            this.makeGraph2();

          }

        });
  }

  makeGraph2() {

    this.lineData2 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue21, this.timestampValue22, this.timestampValue23,
          this.timestampValue24, this.timestampValue25 ],
        series: [
          [this.value21, this.value22, this.value23, this.value24, this.value25]
        ]
      }
    };
  }


//New Queue Blocks
  getLineDataQueue(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newQueueBlocks'].map(res => res.timestamp);
          this.entity = res['newQueueBlocks'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates1.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray1.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue11 = timestamp[i];

            }
            this.timestampValue12 = timestamp[i+10];
            this.timestampValue13 = timestamp[i+20];
            this.timestampValue14 = timestamp[i+30];
            this.timestampValue15 = timestamp[i+40];

            this.value11 = this.transEntitieArray1[i];
            this.value12 = this.transEntitieArray1[i+10];
            this.value13 = this.transEntitieArray1[i+20];
            this.value14 = this.transEntitieArray1[i+30];
            this.value15 = this.transEntitieArray1[i+40];

            this.makeGraph1();

          }

        });
  }

  makeGraph1() {

    this.lineData1 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue11, this.timestampValue12, this.timestampValue13,
          this.timestampValue14, this.timestampValue15 ],
        series: [
          [this.value11, this.value12, this.value13, this.value14, this.value15]
        ]
      }
    };
  }


  //New Votes
  getLineDataVotes(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newVotes'].map(res => res.timestamp);
          this.entity = res['newVotes'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates3.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray3.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue31 = timestamp[i];

            }
            this.timestampValue32 = timestamp[i+10];
            this.timestampValue33 = timestamp[i+20];
            this.timestampValue34 = timestamp[i+30];
            this.timestampValue35 = timestamp[i+40];

            this.value31 = this.transEntitieArray3[i];
            this.value32 = this.transEntitieArray3[i+10];
            this.value33 = this.transEntitieArray3[i+20];
            this.value34 = this.transEntitieArray3[i+30];
            this.value35 = this.transEntitieArray3[i+40];

            this.makeGraph3();

          }

        });
  }

  makeGraph3() {

    this.lineData3 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue31, this.timestampValue32, this.timestampValue33,
          this.timestampValue34, this.timestampValue35 ],
        series: [
          [this.value31, this.value32, this.value33, this.value34, this.value35]
        ]
      }
    };
  }


  //New Ibd Blocks
  getLineDataIbd(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['newIbdBlocks'].map(res => res.timestamp);
          this.entity = res['newIbdBlocks'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates4.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray4.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue41 = timestamp[i];

            }
            this.timestampValue42 = timestamp[i+10];
            this.timestampValue43 = timestamp[i+20];
            this.timestampValue44 = timestamp[i+30];
            this.timestampValue45 = timestamp[i+40];

            this.value41 = this.transEntitieArray4[i];
            this.value42 = this.transEntitieArray4[i+10];
            this.value43 = this.transEntitieArray4[i+20];
            this.value44 = this.transEntitieArray4[i+30];
            this.value45 = this.transEntitieArray4[i+40];

            this.makeGraph4();

          }

        });
  }

  makeGraph4() {

    this.lineData4 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue41, this.timestampValue42, this.timestampValue43,
          this.timestampValue44, this.timestampValue45 ],
        series: [
          [this.value41, this.value42, this.value43, this.value44, this.value45]
        ]
      }
    };
  }


  //Removed Pool Transactions
  getLineDataRemovedTrans(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['removedPoolTransactions'].map(res => res.timestamp);
          this.entity = res['removedPoolTransactions'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates5.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray5.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue51 = timestamp[i];

            }
            this.timestampValue52 = timestamp[i+10];
            this.timestampValue53 = timestamp[i+20];
            this.timestampValue54 = timestamp[i+30];
            this.timestampValue55 = timestamp[i+40];

            this.value51 = this.transEntitieArray5[i];
            this.value52 = this.transEntitieArray5[i+10];
            this.value53 = this.transEntitieArray5[i+20];
            this.value54 = this.transEntitieArray5[i+30];
            this.value55 = this.transEntitieArray5[i+40];

            this.makeGraph5();

          }

        });
  }

  makeGraph5() {

    this.lineData5 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue51, this.timestampValue52, this.timestampValue53,
          this.timestampValue54, this.timestampValue55 ],
        series: [
          [this.value51, this.value52, this.value53, this.value54, this.value55]
        ]
      }
    };
  }


  //Removed Queue Blocks
  getLineDataRemovedQueue(){
    this._httpService.getTrafficData()
      .subscribe(
        res => {
          let timestamp = res['removedQueueBlocks'].map(res => res.timestamp);
          this.entity = res['removedQueueBlocks'].map(res => res.entities);
          let timeLength = timestamp['length'];

          timestamp.forEach((res) => {
            let jsdate = new Date(res);
            this.dates6.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
          });

          this.getCurrentTimestamp();

          for (var i = 0; i <= timeLength; i++){

            this.transEntitieArray6.push((this.entity.length + i) - this.entity.length);

            if (timestamp[i] == this.currentTime){

              this.timestampValue61 = timestamp[i];

            }
            this.timestampValue62 = timestamp[i+10];
            this.timestampValue63 = timestamp[i+20];
            this.timestampValue64 = timestamp[i+30];
            this.timestampValue65 = timestamp[i+40];

            this.value61 = this.transEntitieArray6[i];
            this.value62 = this.transEntitieArray6[i+10];
            this.value63 = this.transEntitieArray6[i+20];
            this.value64 = this.transEntitieArray6[i+30];
            this.value65 = this.transEntitieArray6[i+40];

            this.makeGraph6();

          }

        });
  }

  makeGraph6() {

    this.lineData6 = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '200px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: [ this.timestampValue61, this.timestampValue62, this.timestampValue63,
          this.timestampValue64, this.timestampValue65 ],
        series: [
          [this.value61, this.value62, this.value63, this.value64, this.value65]
        ]
      }
    };
  }


  /*getResponsive(padding, offset) {
   return this._httpService.getResponsive(padding, offset);
   }*/



}
