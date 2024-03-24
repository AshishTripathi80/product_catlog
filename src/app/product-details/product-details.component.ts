import {Component, OnInit} from '@angular/core';
import {Product} from "../data-type";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productData:undefined | Product;



  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    //let productId= this.activeRoute.snapshot.paramMap.get('productId');
    let productId="4";
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData= result;
    })

  }
}
