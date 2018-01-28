/**
 * Created by tomda on 28.01.2018.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatusComponent } from './status.component';
import { routing } from './status.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    StatusComponent
  ]
})
export class StatusModule {}
