import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-get-api-method',
  imports: [],
  templateUrl: './get-api-method.component.html',
  styleUrl: './get-api-method.component.css'
})
export class GetApiMethodComponent {
  posts: any[] = [];

  constructor(private apiService: GetApiService){}
  ngOnInit(){
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    } )
  }
}
