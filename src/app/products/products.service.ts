import { Injectable } from '@angular/core';
import { Products } from './products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private pro: Products[] = [
  //   {

  //     productName : 'Bread',
  //     productCode : '3dfdf',
  //     releaseDate : '6 Sept',
  //     productPrice : 2000,
  //     productRating : 4.9
  //   },
  //   {

  //     productName : 'Butter',
  //     productCode : 'sdf25',
  //     releaseDate : '10 Jan',
  //     productPrice : 244,
  //     productRating : 2.5
  //   },
  //   {

  //     productName : 'Chilly',
  //     productCode : 'rfw3d',
  //     releaseDate : '6 Sept',
  //     productPrice : 554,
  //     productRating : 3.6
  //   }

  // ];



// get the id of particular product
  // getProduct(index: number) {
  //   return this.pro[index];
  // }

  constructor(private http: HttpClient) { }

  // to get products from server which we have created in server.js in server folder
  getProducts() {
    return this.http.get("http://localhost:3000/getProducts");
  }
}
