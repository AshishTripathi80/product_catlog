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
  serviceabilityMessage: string | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Extract productId from route parameters
      const productId = Number(params.get('id'));
      console.log('Product ID:', productId);

      // Retrieve product details based on productId
      this.productService.getProduct(productId).subscribe((result: Product | undefined) => {
        this.productData = result;
        console.log('Product Data:', this.productData);
      });
    });
  }

  checkServiceability(pincode: string) {
    const productId = Number(this.productData?.id);
    if (!productId || !pincode) {
      console.error('Product ID or pincode is missing.');
      return;
    }

    this.productService.checkServiceability(productId, pincode).subscribe(
      (response) => {
        console.warn(response)
        this.serviceabilityMessage = `Serviceability: ${response.isServiceable ? 'Serviceable' : 'Not Serviceable'}. Delivery Time: ${response.deliveryTime}`;
      },
      (error) => {
        console.error('Error checking serviceability:', error);
        this.serviceabilityMessage = 'Error checking serviceability. Please try again later.';
      }
    );
  }
}
