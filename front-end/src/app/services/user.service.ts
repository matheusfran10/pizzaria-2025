import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  update(id: string, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string) {
    return
}
}
