import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { routing } from './users.routing';
import {DataTableModule} from "angular2-datatable";
import {UsersFilterPipe} from "./users-filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    DataTableModule
  ],
  declarations: [
    UsersComponent,
    UsersFilterPipe
  ]
})
export class UsersModule {}
