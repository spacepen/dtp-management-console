/**
 * Created by tomda on 28.01.2018.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivitiesComponent } from './activities.component';
import { routing } from './activities.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule {}
