/**
 * Created by tomda on 28.01.2018.
 */
import { Component, AfterViewInit } from '@angular/core';
import { StatusService } from './status.service';


@Component({
  selector: 'status',
  templateUrl: './status.html',
  styleUrls: ['./status.scss'],
  providers: [StatusService]
})
export class StatusComponent implements AfterViewInit {

  postData: string;
  getData: string;
  info: any;
  infoArray = [];
  blockchainArray = [];
  genesisArray = [];
  genesisPayload = [];
  genesisAO = [];
  genesisAOBody = [];
  nodeTimestamp: any;
  date: any;
  layernames = [];
  nodeip: any;
  nodeport: any;
  layerbeans = [];

 constructor(private _httpService:StatusService){}


  ngAfterViewInit(){
    this.onTestGet1();
    this.getBlockchainData();
    this.getInfoData();
    this.getGenesisBlock();
  }
  

  showAO(){
    let div = document.getElementById("agent-owner");
    let button = document.getElementById("agentOButton");
    if (div.style.display === 'block'){
      button.textContent = "Show Initializer-Agent Owner";
      div.style.display = 'none';
    } else {
      button.textContent = "Hide Initializer-Agent Owner";
      div.style.display = 'block';
    }
  }

  getBlockchainData(){
    this._httpService.getMetadata()
      .subscribe(
        res => {
          this.blockchainArray = res.blockchainMetadata;
          console.log(this.blockchainArray);
        },
        () => console.log("Finished "+this.blockchainArray)
      )
  }

  getGenesisBlock(){
    this._httpService.getMetadata()
      .subscribe(
        res => {
          this.genesisArray = res.blockchainMetadata.genesisBlock;
          this.genesisPayload = res.blockchainMetadata.genesisBlock.payload.payload;
          this.genesisAO = res.blockchainMetadata.genesisBlock.payload.payload.platformInitializerAO;
          this.genesisAOBody = res.blockchainMetadata.genesisBlock.payload.payload.platformInitializerAO.agentOwnerBody;
          console.log(this.genesisArray);
          console.log(this.genesisPayload);
        },
        () => console.log("Finished")
      )
  }

  getInfoData(){
    this._httpService.getInfo()
      .subscribe(
        res => {
          this.infoArray = res;
          console.log(this.infoArray);
        },
        () => console.log("Finished")
      )
  }

  onTestGet1(){
    this._httpService.getMetadata()
      .subscribe(
        data => {
          this.nodeip = data.nodeMetadata.ip;
          this.nodeport = data.nodeMetadata.port;
          this.layernames = data.nodeMetadata.layerNames;
          this.layerbeans = data.nodeMetadata.layerBeans;
          this.nodeTimestamp = data.nodeMetadata.bootstrapTimestamp;
          this.nodeTimestamp = new Date(data.nodeMetadata.bootstrapTimestamp);
          this.nodeTimestamp.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'});
          console.log(this.nodeTimestamp);
        },
            error => alert(error),
            () => console.log("Finished")
      );
  }
}
