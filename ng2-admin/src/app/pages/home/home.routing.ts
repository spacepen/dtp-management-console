/**
 * Created by tomda on 21.01.2018.
 */
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
