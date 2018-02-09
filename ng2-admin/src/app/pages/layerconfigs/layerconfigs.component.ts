/**
 * Created by tinoglatzel on 09.02.18.
 */

import { Component } from '@angular/core';
import { LayerConfigsService } from "./layerconfigs.service";

@Component({
  selector: 'layerconfigs',
  templateUrl: './layerconfigs.html',
  styleUrls: ['./layerconfigs.scss'],
  providers: [ LayerConfigsService ]

})

export class LayerConfigsComponent {

  constructor(
    private _httpService:LayerConfigsService
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
