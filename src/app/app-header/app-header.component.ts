import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  showFullLogo: boolean = false;
  showMenu: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoClick(){
    this.showFullLogo = !this.showFullLogo;
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  goto(pageName: string){
    this.router.navigate([pageName]);
  }
}
