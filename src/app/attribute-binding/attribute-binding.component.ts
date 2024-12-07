import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css'
})
export class AttributeBindingComponent {
  buttonType: string = 'submit';
  inputValue: string = 'Enter your name'
}
