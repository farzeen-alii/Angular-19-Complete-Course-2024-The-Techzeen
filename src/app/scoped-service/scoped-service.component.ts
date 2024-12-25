import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-scoped-service',
  imports: [],
  templateUrl: './scoped-service.component.html',
  styleUrl: './scoped-service.component.css',
  providers: [NotificationService]
})
export class ScopedServiceComponent {
  constructor(private notificationService: NotificationService){}

  sendNotification(){
    this.notificationService.addNotification('New Message Received!')
  }

  getNotifications(){
    return this.notificationService.getNotifications();
  }
}
