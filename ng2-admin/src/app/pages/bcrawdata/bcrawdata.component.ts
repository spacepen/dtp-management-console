/**
 * Created by tinoglatzel on 09.02.18.
 */

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
