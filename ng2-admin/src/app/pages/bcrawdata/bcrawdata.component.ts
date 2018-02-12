import { Component } from '@angular/core';
import { BcRawDataService } from "./bcrawdata.service";

@Component({
  selector: 'bcrawdata',
  templateUrl: './bcrawdata.html',
  styleUrls: ['./bcrawdata.scss'],
  providers: [ BcRawDataService ]

})

export class BcRawDataComponent {

  constructor(
    private _httpService:BcRawDataService
  ) {}

  bcAll: string;
  poolTransData: any;
  queueBlocksData: any;
  chainBlocksData: any;
  ibdBlocksData: any;



  // getting all data from json file /mc/adminarea/bcraw
  getBcDataTest(){
    this._httpService.getBcData()
      .subscribe(
        data => this.bcAll = JSON.stringify(data),
        error => alert(error),
        () => console.log(this.bcAll)
      );
  }

  // getting pool transactions data
  getPoolTransactions(){
    this._httpService.getBcData()
      .subscribe(
        data => this.poolTransData = data.poolTransactions,
        error => alert(error),
        () => console.log(this.poolTransData)
      )
  }

  // getting queue blocks data
  getQueueBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.queueBlocksData = data.queueBlocks,
        error => alert(error),
        () => console.log(this.queueBlocksData)
      )
  }

  // getting chain blocks data
  getChainBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.chainBlocksData = data.chainBlocks,
        error => alert(error),
        () => console.log(this.chainBlocksData)
      )
  }

  // getting ibd blocks data
  getIbdBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.ibdBlocksData = data.ibdBlocks,
        error => alert(error),
        () => console.log(this.ibdBlocksData)
      )
  }
}
