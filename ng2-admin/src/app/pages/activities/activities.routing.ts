/**
 * Created by tomda on 28.01.2018.
 */
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  {
    path: 'activities',
    component: ActivitiesComponent
  }
];

export const routing = RouterModule.forChild(routes);
