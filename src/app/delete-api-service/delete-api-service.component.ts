import { Component, OnInit } from '@angular/core';
import { DeleteServiceService } from '../delete-service.service';

@Component({
  selector: 'app-delete-api-service',
  imports: [],
  templateUrl: './delete-api-service.component.html',
  styleUrl: './delete-api-service.component.css'
})
export class DeleteApiServiceComponent implements OnInit {
  users: any[] = [];
  response: string | null = null;

  constructor(private deleteService: DeleteServiceService){}

  ngOnInit(){
      this.fetchUsers();
  }

  fetchUsers(){
    this.deleteService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.response = 'Error Fetching Users Data';
      }
    })
  }

  deleteUser(userId: number){
    this.deleteService.deleteUser(userId).subscribe({
      next: () => {
        this.response = 'User deleted successfully!';
        this.users = this.users.filter((user) => user.id !== userId)
      },
      error: (err) => {
        this.response = 'Error Deleting Data';
      }
    })
  }

}
