import { Component, ViewEncapsulation } from '@angular/core';
import { EncapsulationSecondComponent } from "../encapsulation-second/encapsulation-second.component";

@Component({
  selector: 'app-encapsulation-first',
  imports: [EncapsulationSecondComponent],
  templateUrl: './encapsulation-first.component.html',
  styleUrl: './encapsulation-first.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EncapsulationFirstComponent {

}
