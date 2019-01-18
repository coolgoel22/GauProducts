import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { Product } from '../models/products.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Subject<any> = new Subject<any>();

  constructor(
    private firebaseDB: AngularFireDatabase,
    private afStorage: AngularFireStorage
  ) { }

  get getProductsObservable(){
    return this._products.asObservable();
  }
  getAllProducts(){
    this.firebaseDB.database.ref('products').on('value', (snapshot)=>{
      var returnArr=[];
      snapshot.forEach(function(childSnapshot) {
        const product:Product = childSnapshot.val();
        product.id = childSnapshot.key;
        returnArr.push(product);
      });
    
      this._products.next(returnArr);
    });
  }
  registerEnquiry(productId: string, userEmail){
    const key = new Date().getTime();
    const enquiry = {
      pId: productId,
      user: userEmail
    }
    this.firebaseDB.database.ref('enqries/' + key).set(enquiry).then(()=>{
      
    }).catch((err)=>{
      console.log(err);
    })
  }
  addProduct(product:Product){
    if(product.img){
      this.afStorage.upload('/products/'+ product.id, product.img).then((res)=>{
        debugger;
        if(res.state === 'success'){
          res.ref.getDownloadURL().then((imageUrl)=>{
            this.firebaseDB.database.ref('products/'+ product.id + '/img').set(imageUrl).then((res)=>{
            
            });
          })
        }
      });
    }
  }
}
