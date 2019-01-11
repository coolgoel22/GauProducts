import { Injectable } from '@angular/core';
import { GavySidhRecords } from '../model/gavySidh.interface';

@Injectable()
export class DataControllerService {
  gavySidhs: GavySidhRecords[] = [{
    name: 'Vikram Goel',
    age: 32,
    mobileNo: '839707164',
    email: 'goelvicky@gmail.com',
    address:{
      locality: 'Kath mandi',
      state: 'Haryana',
      city: 'Sonipat',
      pincode: 131001
    },
    workingArea: 'Gaushala Nirman',
    profession: 'IT MNC',
    isFullTime: false,
    gender: 'Male',
    showDetails: false
  },{
    name: 'Sandip Mansa',
    age: 44,
    mobileNo: '9416086908',
    email: 'sandipmansa@gmail.com',
    address:{
      locality: 'Gandhi Nagar',
      state: 'Punjab',
      city: 'Mansa',
      pincode: 209890
    },
    workingArea: 'Gaushala Nirman',
    profession: 'IT MNC',
    isFullTime: false,
    gender: 'Male',
    showDetails: false
  },{
    name: 'Kaushlendra Jha',
    age: 33,
    mobileNo: '9987909876',
    email: 'jhaji@yahoo.com',
    address:{
      locality: '3 acre',
      state: 'Bihar',
      city: 'Ranchi',
      pincode: 231234
    },
    workingArea: 'Gaushala Nirman',
    profession: '',
    isFullTime: true,
    gender: 'Male',
    showDetails: false
  },{
    name: 'Parul',
    age: 28,
    mobileNo: '3432390989',
    email: 'parul.jha@yahoo.com',
    address:{
      locality: 'rohtak',
      state: 'Haryana',
      city: 'Rohtak',
      pincode: 203109
    },
    workingArea: 'Gaushala Nirman',
    profession: 'IT MNC',
    isFullTime: false,
    gender: 'feMale',
    showDetails: false
  },{
    name: 'Satwinder Kumar',
    age: 28,
    mobileNo: '9809808789',
    email: 'satwinder@mymail.com',
    address:{
      locality: 'Kurushtra',
      state: 'Haryana',
      city: 'Kurushetra',
      pincode: 456789
    },
    workingArea: 'Gaushala Nirman',
    profession: 'IT MNC',
    isFullTime: false,
    gender: 'Male',
    showDetails: false
  }];
  constructor() { }
  getAllItems(){
    return this.gavySidhs;
  }
  addGavySidh(obj){
    this.gavySidhs.push(obj);
  }
  editGavySidh(obj){
    console.log("Edit Gavy Sidh");
  }
  isValidUser(userName:string, password:string):boolean{
    if(userName && password){
      return true;
    }
  }

}
