import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-injectable-service',
  imports: [],
  templateUrl: './injectable-service.component.html',
  styleUrl: './injectable-service.component.css'
})
export class InjectableServiceComponent {
  constructor(private logger: LoggerService){}
  logMessage(): void{
    this.logger.log('This is a log message');
  }
  WarnMessage(): void{
    this.logger.warn('This is a warn message');
  }
  ErrorMessage(): void{
    this.logger.error('This is a error message');
  }
}
