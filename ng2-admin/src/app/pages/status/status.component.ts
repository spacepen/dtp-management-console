/**
 * Created by tomda on 28.01.2018.
 */
import { Component } from '@angular/core';
import { StatusService } from './status.service';


@Component({
  selector: 'status',
  templateUrl: './status.html',
  styleUrls: ['./status.scss'],
  providers: [StatusService]
})
export class StatusComponent {

  postData: string;
  getData: string;
  getData1: string;
  nodeMetadataList: any;
  nodeMetaArray = [];
  nodeTimestamp: any;
  date: any;

 constructor(private _httpService:StatusService){}

 onTestPost(){
    this._httpService.postTest()
      .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
      );
 }
  onTestGet(){
    this._httpService.getTest()
      .subscribe(
        data => {
          this.nodeMetadataList = data.nodeMetadata.layerNames;
          /*var length = data.nodeMetadata.layerNames["length"];
          for (var i = 0; i < length; i++){
            this.nodeMetaArray[i] = data.nodeMetadataList.layerNames[i];
          }
          console.log(length);*/
        },
        error => alert(error),
        () => console.log("Finished")
      );
  }

  onTestGet1(){
    this._httpService.getTest1()
      .subscribe(
        data => {
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
