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

  usersAll: string;
  agentData: any;
  agentOwnerData: any;


  // showing data of methods below after loading the page
  ngAfterViewInit(){
    this.getAgentOwner();
    this.getAgents();
  }

  // getting all data from json file /mc/adminarea/users
  getUsersTest(){
    this._httpService.getUserData()
      .subscribe(
        data => this.usersAll = JSON.stringify(data),
        error => alert(error),
        () => console.log(this.usersAll)
      );
  }

  // getting agentOwners data
  getAgentOwner(){
    this._httpService.getUserData()
      .subscribe(
        data => this.agentOwnerData = data.agentOwners,
        error => alert(error),
        () => console.log(this.agentOwnerData)
      );
  }

  // getting agents data
  getAgents(){
    this._httpService.getUserData()
      .subscribe(
        data => this.agentData = data.agents,
        error => alert(error),
        () => console.log(this.agentData)
      );
  }




  // getAgentsTest(){
  //   this._httpService.getUsers()
  //     .subscribe(
  //       data => {
  //         this.agentList = data.agents;
  //         /*var length = data.nodeMetadata.layerNames["length"];
  //          for (var i = 0; i < length; i++){
  //          this.nodeMetaArray[i] = data.nodeMetadataList.layerNames[i];
  //          }
  //          console.log(length);*/
  //       },
  //       error => alert(error),
  //       () => console.log("Finished: " + this.agentList)
  //     );
  // }

}
