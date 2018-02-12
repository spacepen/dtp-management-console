import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LayerConfigsService{
  constructor(private _http: Http){}

  getLayerData(){

    return this._http.get('http://localhost:8080/dtp/mc/adminarea/layerconfigs').map(res => res.json());
  }
}
