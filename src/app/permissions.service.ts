import { Injectable } from '@angular/core';
import { Permissions } from "./shared/enums/permissions";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  userPermissions = {
    organization: 'PUMA',
    userRole: 'Admin'
  }

  constructor() {
  }

  getUserPermissionAndOrganizationData(): any {
    return {
      organization: 'PUMA',
      userRoles: ['ADMIN', 'PLM', 'MERCHANDISER']
    }
  }

  visibilityService(id: string): Permissions {
    const fields: any = {
      'DELETE_BUTTON': {
        'PLM': Permissions.Disabled,
        'ADMIN': Permissions.Shown,
        'MERCHANDISER': Permissions.Shown,
      },
      'UPLOAD_BUTTON': {
        'PLM': Permissions.Disabled,
        'ADMIN': Permissions.Shown,
        'MERCHANDISER': Permissions.Shown,
      },
    }

    return fields[id]['PLM'] as Permissions;
  }


  getVisibility(id: string): Permissions {
    const fields: any = {
      'DELETE_BUTTON': Permissions.Shown,
      'UPLOAD_BUTTON': Permissions.Hidden,
    }

    return fields[id]['PLM'] as Permissions;
  }
}
