import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {


  products: any = [];

  showImage: boolean = true;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
    this.products = data;
    });
  }

  toggleImage() {
   this.showImage = !this.showImage;
  }

}
