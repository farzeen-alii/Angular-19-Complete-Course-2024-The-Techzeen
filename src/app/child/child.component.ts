import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs: ['messageProp'],
})
export class ChildComponent {
  messageProp: string = '';
}
