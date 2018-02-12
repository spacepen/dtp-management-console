import { Routes, RouterModule } from '@angular/router';
import { BcRawDataComponent } from "./bcrawdata.component";

const routes: Routes = [
  {
    path: '',
    component: BcRawDataComponent
  }
];

export const routing = RouterModule.forChild(routes);
