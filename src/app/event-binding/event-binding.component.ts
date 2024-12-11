import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  buttonMessage: string = '';
  inputMessage: string = '';

  onButtonClick(){
    this.buttonMessage = 'Button Clicked';
  }

  onInputChange(event: any){
    this.inputMessage = `You typed: ${event.target.value}`
  }

}
