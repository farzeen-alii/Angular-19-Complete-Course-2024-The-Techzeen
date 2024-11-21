import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener-example',
  imports: [],
  templateUrl: './host-listener-example.component.html',
  styleUrl: './host-listener-example.component.css'
})
export class HostListenerExampleComponent {
  bgColor = 'blue';

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = 'green';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = 'blue';
  }
  @HostListener('click') onMouseClick(){
    this.bgColor = 'yellow';
  }
}
