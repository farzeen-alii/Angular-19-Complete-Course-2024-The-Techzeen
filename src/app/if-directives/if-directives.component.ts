import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directives',
  imports: [],
  templateUrl: './if-directives.component.html',
  styleUrl: './if-directives.component.css'
})
export class IfDirectivesComponent {
  isLoggedIn = true;
  isAdmin = true;
}
