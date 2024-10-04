import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private apiUrl = 'http://localhost:8080/api';  // URL base de la API

  constructor(private http: HttpClient) { }

  // Métodos de productos
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  createProduct(product: any, userName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/products?userName=${userName}`, product);
  }

  updateProduct(productId: number, product: any, userName: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${productId}?userName=${userName}`, product);
  }

  deleteProduct(productId: number, userName: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}?userName=${userName}`);
  }

  searchProductsByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/searchByName?name=${name}`);
  }

  searchProductsByDate(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/searchByDate?startDate=${startDate}&endDate=${endDate}`);
  }

  searchProductsByUser(userName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/searchByUser?userName=${userName}`);
  }

  // Métodos de usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}
