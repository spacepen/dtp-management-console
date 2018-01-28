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
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      { path: 'status', loadChildren: './status/status.module#StatusModule'},
      { path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule'},
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);