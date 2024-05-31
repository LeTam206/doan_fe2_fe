import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/getAllProducts');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/product/${id}`);
  }
}
