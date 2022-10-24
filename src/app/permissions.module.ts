import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckPermissionDirective } from "./check-permission.directive";



@NgModule({
  declarations: [CheckPermissionDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CheckPermissionDirective
  ]
})
export class PermissionsModule { }
