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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExampleComponent, PreserveWhitespaceExampleComponent, EncapsulationFirstComponent, ParentComponent, SuperComponent, IfDirectivesComponent, SwitchCaseDirectiveComponent, ForDirectiveComponent, NgClassDirectiveComponent, NgStyleComponent, InterpolationComponent, ErrorHandlingInterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Farzeen Ali';
}
