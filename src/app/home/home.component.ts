import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../data-type";
import {NgForOf, NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  productList:undefined | Product[];
  isLoggedIn: boolean = false;
  constructor(private product:ProductService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void{
    this.isLoggedIn = this.authService.isLoggedIn();
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }

  searchProducts(criteria: string, query: string) {
    let params: any = {};


    // Set the appropriate search parameter based on the selected criteria
    switch (criteria) {
      case 'name':
        params = { name: query };
        break;
      case 'code':
        params = { code: query };
        break;
      case 'brand':
        params = { brand: query };
        break;
      case 'price':
        params ={price : query};
        break;
      default:
        console.error('Invalid search criteria');
        return;
    }
    this.product.searchProduct(params).subscribe((result)=> {
      console.warn(result)
      this.productList = result;
    })
  }

  showProductDetails(id: Number) {
    this.router.navigate(['/product-details',id]);
  }
}
