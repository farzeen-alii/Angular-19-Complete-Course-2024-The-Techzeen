import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListenerExampleComponent } from './host-listener-example/host-listener-example.component';
import { PreserveWhitespaceExampleComponent } from "./preserve-whitespace-example/preserve-whitespace-example.component";
import { EncapsulationFirstComponent } from "./encapsulation-first/encapsulation-first.component";
import { ParentComponent } from "./parent/parent.component";
import { SuperComponent } from "./super/super.component";
import { IfDirectivesComponent } from "./if-directives/if-directives.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExampleComponent, PreserveWhitespaceExampleComponent, EncapsulationFirstComponent, ParentComponent, SuperComponent, IfDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Farzeen Ali';
}
