import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListenerExampleComponent } from './host-listener-example/host-listener-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostListenerExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Farzeen Ali';
}
