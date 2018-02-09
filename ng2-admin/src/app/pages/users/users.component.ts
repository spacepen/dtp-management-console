/**
 * Created by tinoglatzel on 09.02.18.
 */


import { Component } from '@angular/core';
import { ActivitiesService } from "../activities/activities.service";

@Component({
  selector: 'users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  providers: [ ActivitiesService ]
})

export class UsersComponent {
  constructor(
    private _httpService:ActivitiesService
  ) {}

  getData: string;

  onTestGet(){
    this._httpService.getTest()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }
}
