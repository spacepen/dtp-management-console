import { Component, NgModule } from '@angular/core';
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
  poolTransactionData = [];
  queueBlockData = [];
  chainBlockData = [];
  ibdBlockData = [];

  ngAfterViewInit(){
    this.getPoolTransactions();
    this.getChainBlocks();
    this.getQueueBlocks();
    this.getIbdBlocks();
  }

  // getting all data from json file /mc/adminarea/bcraw
  getBcDataTest(){
    this._httpService.getBcData()
      .subscribe(
        data => this.bcAll = JSON.stringify(data),
        error => alert(error),
        () => console.log(this.bcAll)
      );
  }


  // getting Blockchain Data from specific blocks //

  getPoolTransactions(){
    this._httpService.getBcData()
      .subscribe(
        data => this.poolTransactionData = data.poolTransactions,
        error => alert(error),
        () => console.log(this.poolTransactionData)
      );
  }
  getQueueBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.queueBlockData = data.queueBlocks,
        error => alert(error),
        () => console.log(this.queueBlockData)
      );
  }
  getChainBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.chainBlockData = data.chainBlocks,
        error => alert(error),
        () => console.log(this.chainBlockData)
      );
  }
  getIbdBlocks(){
    this._httpService.getBcData()
      .subscribe(
        data => this.ibdBlockData = data.ibdBlocks,
        error => alert(error),
        () => console.log(this.ibdBlockData)
      );
  }







  // SHOW AND HIDE BUTTON FUNTIONS //

  showPT(){
    let div = document.getElementById("pooltransactions-1");
    let button = document.getElementById("pool1Button");
    if (div.style.display == 'none'){
      button.textContent = "Hide Pool Transactions";
      div.style.display = 'block';
    } else {
      button.textContent = "Show Pool Transactions";
      div.style.display = 'none';
    }
  }
  showQB(){
    let div = document.getElementById("queueblocks-1");
    let button = document.getElementById("queue1Button");
    if (div.style.display == 'none'){
      button.textContent = "Hide Queue Blocks";
      div.style.display = 'block';
    } else {
      button.textContent = "Show Queue Blocks";
      div.style.display = 'none';
    }
  }
  showCB(){
    let div = document.getElementById("chainblocks-1");
    let button = document.getElementById("chain1Button");
    if (div.style.display == 'none'){
      button.textContent = "Hide Chain Blocks";
      div.style.display = 'block';
    } else {
      button.textContent = "Show Chain Blocks";
      div.style.display = 'none';
    }
  }
  showIB(){
    let div = document.getElementById("ibdblocks-1");
    let button = document.getElementById("ibd1Button");
    if (div.style.display == 'none'){
      button.textContent = "Hide IBD Blocks";
      div.style.display = 'block';
    } else {
      button.textContent = "Show IBD Blocks";
      div.style.display = 'none';
    }
  }

}




