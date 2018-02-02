/**
 * Created by tomda on 28.01.2018.
 */
import { Component } from '@angular/core';
import { StatusService } from './status.service';


@Component({
  selector: 'status',
  //templateUrl: './status.html',
  template: `<button class="status-content" (click)="onTestPost()">Test POST Request</button><br>
                <p class="status-content">Outlet: {{postData}}</p><br>
                <button class="status-content"(click)="onTestGet()">Test GET Request</button><<br>
                <p class="status-content">Outlet: {{getData}}</p>`,
  styleUrls: ['./status.scss'],
  providers: [StatusService]
})
export class StatusComponent {

  postData: string;
  getData: string;

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
}
