import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input('name') name: string = '';

  constructor(public communicationService: CommunicationService) {
    this.communicationService.receiveBS.subscribe((data) => {
      console.log(data);
      this.name = data;
    });
    this.communicationService.receiveS.subscribe((data) => {
      console.log(data);
      this.name = data;
    });
  }

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
