import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListenerExampleComponent } from './host-listener-example/host-listener-example.component';
import { PreserveWhitespaceExampleComponent } from "./preserve-whitespace-example/preserve-whitespace-example.component";
import { EncapsulationFirstComponent } from "./encapsulation-first/encapsulation-first.component";
import { ParentComponent } from "./parent/parent.component";
import { SuperComponent } from "./super/super.component";
import { IfDirectivesComponent } from "./if-directives/if-directives.component";
import { SwitchCaseDirectiveComponent } from "./switch-case-directive/switch-case-directive.component";
import { ForDirectiveComponent } from "./for-directive/for-directive.component";
import { NgClassDirectiveComponent } from "./ng-class-directive/ng-class-directive.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { ErrorHandlingInterpolationComponent } from "./error-handling-interpolation/error-handling-interpolation.component";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { InjectableServiceComponent } from "./injectable-service/injectable-service.component";
import { ScopedServiceComponent } from "./scoped-service/scoped-service.component";
import { UtilityServiceComponent } from "./utility-service/utility-service.component";
import { GetApiMethodComponent } from "./get-api-method/get-api-method.component";
import { PostApiServiceComponent } from "./post-api-service/post-api-service.component";
import { DeleteApiServiceComponent } from "./delete-api-service/delete-api-service.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExampleComponent, PreserveWhitespaceExampleComponent, EncapsulationFirstComponent, ParentComponent, SuperComponent, IfDirectivesComponent, SwitchCaseDirectiveComponent, ForDirectiveComponent, NgClassDirectiveComponent, NgStyleComponent, InterpolationComponent, ErrorHandlingInterpolationComponent, AttributeBindingComponent, StyleBindingComponent, ClassBindingComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, CustomPipeComponent, InjectableServiceComponent, ScopedServiceComponent, UtilityServiceComponent, GetApiMethodComponent, PostApiServiceComponent, DeleteApiServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Farzeen Ali';
}
