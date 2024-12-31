import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {
  private apiUrl = 'http://localhost:3000/users';

  private http = inject(HttpClient);

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(userId: number): Observable<any>{
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete(deleteUrl);
  }

  constructor() { }
}
