/**
 * Created by tomda on 01.02.2018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService{
  constructor(private _http: Http){}

  getInfo(){
    return this._http.get('http://localhost:8080/dtp/storage/info').map(res => res.json());
    // For now every different user has to change the ip to his own, so not dynamically :/
    // IMPORTANT NOTICE:  As it is normally not allowed to call a REST API within the same "localhost" (due to security reasons of a browser),
    // (needed)           it is needed to install an AddOn in the browser (e.g. CORS in Chrome) to allow cross-origin ressource sharing.
    //                    In our case to allow one port (8080) of localhost to communicate with the other port (in our case the development server on port 4200);
    //                    Otherwise you will get an error in the browser's console and receive no data from the REST API (it has nothing to do with the code itself);
  }

  getMetadata(){

    return this._http.get('http://localhost:8080/dtp/mc/nodewatch/metadata').map(res => res.json());

  }
}
