/**
 * Created by tomda on 28.01.2018.
 */
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './status.component';

const routes: Routes = [
  {
    path: 'status',
    component: StatusComponent
  }
];

export const routing = RouterModule.forChild(routes);
