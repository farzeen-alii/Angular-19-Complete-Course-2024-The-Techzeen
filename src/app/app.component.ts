import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListenerExampleComponent } from './host-listener-example/host-listener-example.component';
import { PreserveWhitespaceExampleComponent } from "./preserve-whitespace-example/preserve-whitespace-example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExampleComponent, PreserveWhitespaceExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Farzeen Ali';
}
