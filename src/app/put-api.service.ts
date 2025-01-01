import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutApiService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  updateUser(id: number, user: {name: string; email: string}): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, user);
  }

}

