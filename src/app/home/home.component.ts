import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { GavySidhRecords } from '../model/gavySidh.interface';
import { UserPermissions } from '../model/permissions.interface';

import { DataControllerService } from '../services/data-controller.service';
import { Constants } from '../app-constants';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {

  constructor(
    private data: DataControllerService, 
    private router: Router) { }
  
  ngOnInit() {
  
  }
  goto(pageName: string){
    this.router.navigate([pageName]);
  }
  
  showDetail(record){
    console.log(record);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(record)
      }
    }
    this.router.navigate(["gavySidhDetail"], navigationExtras);
  }

}
