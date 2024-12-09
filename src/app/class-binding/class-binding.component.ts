import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  isHighlighted: boolean = false;

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
  }
}
