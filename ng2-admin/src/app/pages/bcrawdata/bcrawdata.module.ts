import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BcRawDataComponent } from "./bcrawdata.component";
import { routing } from "./bcrawdata.routing";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    BcRawDataComponent
  ]
})
export class BcRawDataModule {}
