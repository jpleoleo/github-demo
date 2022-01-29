import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  routes: any = [
    { name: 'Header', path: 'header', active: false },
    { name: 'Main', path: 'main', active: false },
    { name: 'Footer', path: 'footer', active: false }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.router.events.subscribe((value: any) => {

      if (this.router.url.indexOf('header') !== -1) {
        this.routes[0].active = true;
        this.routes[1].active = false;
        this.routes[2].active = false;
      } else if (this.router.url.indexOf('main') !== -1) {
        this.routes[0].active = false;
        this.routes[1].active = true;
        this.routes[2].active = false;
      } else if (this.router.url.indexOf('footer') !== -1) {
        this.routes[0].active = false;
        this.routes[1].active = false;
        this.routes[2].active = true;
      } else {

      }
      console.log(this.routes);
    });
  }

  navigateTo(page: string) {
    this.router.navigateByUrl('/' + page);
  }

}
