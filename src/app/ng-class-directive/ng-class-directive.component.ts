import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  imports: [CommonModule],
  templateUrl: './ng-class-directive.component.html',
  styleUrl: './ng-class-directive.component.css'
})
export class NgClassDirectiveComponent {
  isActive : boolean = false;

  toggleState(){
    this.isActive = !this.isActive;
  }
}
