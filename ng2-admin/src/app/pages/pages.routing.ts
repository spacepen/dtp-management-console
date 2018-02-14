import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',  loadChildren: './home/home.module#HomeModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      { path: 'status', loadChildren: './status/status.module#StatusModule'},
      { path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule'},
      { path: 'users', loadChildren: './users/users.module#UsersModule'},
      { path: 'layerconfigs', loadChildren: './layerconfigs/layerconfigs.module#LayerConfigsModule'},
      { path: 'bcrawdata', loadChildren: './bcrawdata/bcrawdata.module#BcRawDataModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
