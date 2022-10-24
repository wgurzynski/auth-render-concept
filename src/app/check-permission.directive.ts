import { Directive, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Permissions, Sections } from "./shared/enums/permissions";
import { FormControl } from "@angular/forms";

class Service {
  constructor(private renderer: any, private containerRef: ViewContainerRef) {
  }

  getExecs(renderer: any, containerRef: ViewContainerRef): any {
    const x = () => {
      this.containerRef.clear();
    }
    return {
      [Permissions.Disabled]: {
        'UI-SELECT': x,
        'button': x
      },
      [Permissions.Disabled]: {
        'UI-SELECT': () => {
          formControl.disable();
        },
        'UI-BUTTON': () => {
          this.renderer.setAttribute('disabled', true)
        },
        'form': () => {
        },
      }
    }
  }
}

@Directive({
  selector: '[appCheckPermission]'
})
export class CheckPermissionDirective implements OnInit {

  @Input() appCheckPermission: Sections | undefined;
  @Output() testEvent = new EventEmitter()
  private userHasPermission: boolean = true;

  constructor(private service: Service) {
    const execs = service.getExecs();
  }

  ngOnInit(): void {
    if (this.userHasPermission) {
      this.testEvent.emit(true)
    } else {
      this.testEvent.emit(false);
    }
  }
}
