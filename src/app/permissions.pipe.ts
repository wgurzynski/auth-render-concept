import { Pipe, PipeTransform } from '@angular/core';
import { PermissionsService } from "./permissions.service";
import { Permissions } from './shared/enums/permissions';

@Pipe({
  name: 'permissions'
})
export class PermissionsPipe implements PipeTransform {


  constructor(private permissionService: PermissionsService) {
  }

  transform(value: string): Permissions {
    return this.permissionService.getVisibility(value);
  }
}
