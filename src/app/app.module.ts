import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckPermissionDirective } from './check-permission.directive';
import { CommonModule } from "@angular/common";
import { PermissionsModule } from "./permissions.module";
import { PermissionsPipe } from "./permissions.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PermissionsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PermissionsModule
  ],
  exports: [],
  providers: [CheckPermissionDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
