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
  nodeTimestamp: any;
  date: any;
  layernames = [];
  nodeip: any;
  nodeport: any;
  layerbeans = [];

 constructor(private _httpService:StatusService){}

 /*onTestPost(){
    this._httpService.postTest()
      .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
      );
 }*/

  ngAfterViewInit(){
    this.onTestGet1();
    this.getInfoData();
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
          var d = new Date(this.nodeTimestamp);
          var formattedDate = d.getDate() + "-" + (d.getMonth()+1)+ "-" +  d.getFullYear();
          var hours = (d.getHours()<10) ? "0" + d.getHours() : d.getHours();
          //var minutes = (d.getMinutes()<10) ? "0" + d.getMinutes() : d.getMinutes;
          var formattedTime = hours + "h";
          formattedDate = formattedDate + " " + formattedTime;
          this.date = formattedDate;
          console.log(formattedDate);
        },
            error => alert(error),
            () => console.log("Finished")
      );
  }
}
