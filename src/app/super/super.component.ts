import { Component } from '@angular/core';
import { SubComponent } from "../sub/sub.component";

@Component({
  selector: 'app-super',
  imports: [SubComponent],
  templateUrl: './super.component.html',
  styleUrl: './super.component.css'
})
export class SuperComponent {
  receivedMessage: string = '';

  onMessageReceived(message: string){
    this.receivedMessage = message;
  }
}
