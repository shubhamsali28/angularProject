import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // Products model
  pro: Products;

  prodCode: number;

  productsArr: any = [];

  constructor(private activateRounte: ActivatedRoute, private router: Router, private productService: ProductsService) { }

  ngOnInit() {

    this.activateRounte.params.subscribe((data) => {
      // bcz in app-routing.module we have mentioned as Id
    this.prodCode = data.Id;

    // For getting information of a particular id
    // this.pro = this.productService.getProduct(this.prodCode);
    }
    );

  }

  backTo() {
  this.router.navigate(['/products']);
  }


}
