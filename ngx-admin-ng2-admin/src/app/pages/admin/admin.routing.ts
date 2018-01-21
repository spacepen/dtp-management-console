/**
 * Created by tomda on 21.01.2018.
 */
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

export const routing = RouterModule.forChild(routes);
