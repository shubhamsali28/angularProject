export class Products {

  // public productImage: string;
  public productName: string;
  public productCode: string;
  public releaseDate: string;
  public productPrice: number;
  public productRating: number;

  constructor(productName: string, productCode: string, releaseDate: string, productPrice: number, productRating: number) {
    // this.productImage = productImage;
    this.productName = productName;
    this.productCode = productCode;
    this.releaseDate = releaseDate;
    this.productPrice = productPrice;
    this.productRating = productRating;
  }
}
