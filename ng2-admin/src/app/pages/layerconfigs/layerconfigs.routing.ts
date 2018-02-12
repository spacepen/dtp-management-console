import { Routes, RouterModule } from '@angular/router';
import { LayerConfigsComponent } from './layerconfigs.component';

const routes: Routes = [
  {
    path: '',
    component: LayerConfigsComponent
  }
];

export const routing = RouterModule.forChild(routes);
