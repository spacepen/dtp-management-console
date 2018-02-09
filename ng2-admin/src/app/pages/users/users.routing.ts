/**
 * Created by tinoglatzel on 09.02.18.
 */


import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

export const routing = RouterModule.forChild(routes);
