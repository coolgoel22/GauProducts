import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {

  constructor(
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
