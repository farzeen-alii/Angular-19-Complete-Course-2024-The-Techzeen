import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  private apiUrl = 'http://localhost:3000/users';

  private http = inject(HttpClient);

  addUser(user: { name: string; email: string}): Observable<any>{
    return this.http.post(this.apiUrl, user)
  }

}
