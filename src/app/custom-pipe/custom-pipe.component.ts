import { Component } from '@angular/core';
import { ReverseStringPipe } from '../reverse-string.pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [ReverseStringPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

}
