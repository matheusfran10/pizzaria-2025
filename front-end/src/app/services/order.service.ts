import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderItems } from './models/order-items';
import { Observable } from 'rxjs';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/'; 
  private mockOrders: Order[] = [];

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
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getOrderItems(orderId: number): Observable<OrderItems[]> {
    return this.http.get<OrderItems[]>(`${this.baseUrl}/${orderId}/items`);
  }

  getOrderById(id: number): Order | undefined {
  return this.mockOrders.find(o => o.id === id);
}
}
