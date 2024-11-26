import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css'
})
export class SubComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(value: string){
    this.messageEvent.emit(value);
  }
}
