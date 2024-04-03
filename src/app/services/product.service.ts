import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../data-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseURL:string='http://localhost:9002/api/products';
  constructor(private http:HttpClient) { }

  productList(){
    return this.http.get<Product[]>(this.baseURL)
  }

  getProduct(id: Number) {
    return this.http.get<Product>(this.baseURL+`/${id}`);
  }
  searchProduct(params:any){
    return this.http.get<Product[]>('http://localhost:9002/api/products/search', { params });

  }

  checkServiceability(productId: number, pincode: string): Observable<any> {
    const params = new HttpParams()
      .set('productId', productId.toString())
      .set('pincode', pincode);
    return this.http.get<any>(`${this.baseURL}/serviceability`, { params });
  }
}
