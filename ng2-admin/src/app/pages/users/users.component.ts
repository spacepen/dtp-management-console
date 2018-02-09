/**
 * Created by tinoglatzel on 09.02.18.
 */


import { Component } from '@angular/core';
import { UsersService } from "./users.service";

@Component({
  selector: 'users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  providers: [ UsersService ]
})

export class UsersComponent {
  constructor(
    private _httpService:UsersService
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
