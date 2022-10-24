import { Component } from '@angular/core';
import { Sections, Permissions } from './shared/enums/permissions';
import { FormControl } from "@angular/forms";
import { PermissionsService } from "./permissions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-render-concept';
  sections = Sections;
  Permissions = Permissions;
  control = new FormControl({
    value: '',
    disabled: this.permissionService.getVisibility('') === Permissions.Hidden
  })

  constructor(private permissionService: PermissionsService) {
    this.permissionService.getVisibility('') === Permissions.Hidden ? this.control.enable() : this.control.disable()
  }

}
