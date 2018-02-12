import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayerConfigsComponent } from './layerconfigs.component';
import { routing } from "./layerconfigs.routing";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    LayerConfigsComponent
  ]
})
export class LayerConfigsModule {}
