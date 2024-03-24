import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../data-type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseURL:string='http://localhost:9002/api/products';
  constructor(private http:HttpClient) { }

  productList(){
    return this.http.get<Product[]>(this.baseURL)
  }

  getProduct(id: string) {
    return this.http.get<Product>(this.baseURL+`/${id}`);
  }
}
