/**
 * Created by tomda on 28.01.2018.
 */
import { Component } from '@angular/core';
import { ActivitiesService } from './activities.service'


@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styleUrls: ['./activities.scss'],
  providers: [ActivitiesService]
})


export class ActivitiesComponent {
  constructor(private _httpService:ActivitiesService){}

  getData: any;


  onTestGet() {
    this._httpService.getTest()
      .subscribe(
        data => {this.getData = data},
        error => alert(error),
        () => console.log("Finished"+this.getData)
      );
  }


}
