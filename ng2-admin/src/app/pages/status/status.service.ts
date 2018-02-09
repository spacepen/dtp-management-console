/**
 * Created by tomda on 01.02.2018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService{
  constructor(private _http: Http){}

  postTest(){
    var json = JSON.stringify({var1: 'test', var2: 3});
    var params = 'json= ' + json;

    return this._http.post('http://validate.jsontest.com/?json=[JSON-code-to-validate]', params, {}).map(res => res.json());
  }

  getTest(){
    return this._http.get('http://10.0.0.8:8080/dtp/mc/nodewatch/metadata').map(res => res.json());  // For now every different user has to change the ip to his own, so not dynamically :/
    // IMPORTANT NOTICE:  As it is normally not allowed to call a REST API within the same "localhost" (due to security reasons of a browser),
    // (needed)           it is needed to install an AddOn in the browser (e.g. CORS in Chrome) to allow cross-origin ressource sharing.
    //                    In our case to allow one port (8080) of localhost to communicate with the other port (in our case the development server on port 4200);
    //                    Otherwise you will get an error in the browser's console and receive no data from the REST API (it has nothing to do with the code itself);
    // This has cost me a lot of nerves so don't complain please... I'm tired and coding is always such a pain in the ass... so that's why I'm writing so much bullshit even though I already finished explaining the solution to the fucking problem, I couldn't find any information to for four hours, because programmers are too intelligent to simply explain how coding works and make it seem more complicated than it actually could because they are insecure and want the be the only app developer for 3CON and don't even have any knowledge about our fucking amazing project... BUENAS NOCHES! I'M OUT!
  }

  getTest1(){
    return this._http.get('http://10.0.0.8:8080/dtp/mc/nodewatch/metadata');
  }
}
