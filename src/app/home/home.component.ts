import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../data-type";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  productList:undefined | Product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void{
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }
}
