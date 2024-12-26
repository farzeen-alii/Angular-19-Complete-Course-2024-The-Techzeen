import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-utility-service',
  imports: [],
  templateUrl: './utility-service.component.html',
  styleUrl: './utility-service.component.css'
})
export class UtilityServiceComponent {
  formattedDate: string;
  constructor(private utilityService: UtilityService){
    const sampleDate = new Date();
    this.formattedDate = this.utilityService.formatDate(sampleDate);
  }

}
