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

  layerAll: string;
  coreData: any;
  layerData: any;


  // getting all data from json file /mc/adminarea/layerconfigs
  getLayerDataTest(){
    this._httpService.getLayerData()
      .subscribe(
        data => this.layerAll = JSON.stringify(data),
        error => alert(error),
        () => console.log(this.layerAll)
      );
  }

  // getting core layer configurations data
  getCoreLayers(){
    this._httpService.getLayerData()
      .subscribe(
        data => this.coreData = data.coreLayerConfigs,
        error => alert(error),
        () => console.log(this.coreData)
      )
  }

  // getting layer configurations data
  getLayers(){
    this._httpService.getLayerData()
      .subscribe(
        data => this.layerData = data.layerConfigs,
        error => alert(error),
        () => console.log(this.layerData)
      )
  }
}
