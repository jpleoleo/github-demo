import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input('name') name: string = '';

  constructor() { }

  ngOnChanges() {
    //console.log('1 ngOnChanges');
  }

  ngOnInit(): void {
    //console.log('2 ngOnInit');
  }

  ngDoCheck(): void {
    //console.log('3 ngDoCheck');
  }

  ngAfterContentInit(): void {
    //console.log('4 ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    //console.log('5 ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    //console.log('6 ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    //console.log('7 ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    //console.log('8 ngOnDestroy');
  }

}
