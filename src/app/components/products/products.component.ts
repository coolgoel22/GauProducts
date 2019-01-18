import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product.service';


import { Product } from '../../models/products.model';
import { constants } from '../../constants/constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  public products:Product;
  public areUSure: boolean = false;
  public content;
  private enquiredProduct: Product;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {
    
   }

  ngOnInit() {
    this.productService.getProductsObservable.subscribe((items: any)=>{
      console.log(items);
      this.products = items;
      this.ref.detectChanges();
    });
    this.productService.getAllProducts();
  }
  buy(product: Product){
    this.areUSure = true;
    this.content = {
      'text': "This will send a request to seller.",
      'heading': "Are you sure?"
    };
    this.ref.detectChanges();
    this.enquiredProduct = product;
    
  }
  handleDiaRes(res:boolean){
    if(res){
      const userEmail = this.authService.getUser().email;
      this.productService.registerEnquiry(this.enquiredProduct.id, userEmail);
    }
    this.areUSure = false;
    this.enquiredProduct = null;
    this.ref.detectChanges();
    debugger;
  }
  // addProduct(product){
  //     this.productService.addProduct({
  //       name: product.name,
  //       amount: 100,
  //       quantity: '500ml',
  //       descrition: 'Good for all skin diseases'
  //     }, product.id)

  // }
}
