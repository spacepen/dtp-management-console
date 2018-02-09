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
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }

  onTestGet1(){
    this._httpService.getTest1()
      .subscribe(
        data => this.getData1 = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }
}
