import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { constants } from '../../constants/constants';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-upload-items',
  templateUrl: './upload-items.component.html',
  styleUrls: ['./upload-items.component.less']
})
export class UploadItemsComponent implements OnInit {
  public products: any = [];
  public item:any = {};
  private productImage: any;
  constructor(
    private ref: ChangeDetectorRef,
    private productService: ProductService
  ) {
   }

  ngOnInit() {
    this.products = constants.getAllProductsName();
    console.log(this.products);
    // this.ref.detectChanges();
  }
  uploadProduct(product:any){
    debugger;
    product.img = this.productImage;
    product.id = product.category.split('_$_')[0];
    product.name = product.category.split('_$_')[1];
    this.productService.addProduct(product);
    // const storageRef = storage

    
  }
  onImageChange($event){
    this.productImage = $event.target.files[0];
  }
}
