import {
  NgModule
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AgGridModule
} from 'ag-grid-angular';
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    AppSkyModule,
    AgGridModule
  ]
})
export class AppExtrasModule { }
