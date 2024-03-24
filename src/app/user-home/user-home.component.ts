import { Component } from '@angular/core';
import {Product} from "../data-type";
import {ProductService} from "../services/product.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  productList:undefined | Product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void{
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }
}
