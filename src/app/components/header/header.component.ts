import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('name') name: string = '';

  @Output('update') updated: EventEmitter<string> = new EventEmitter();

  age: number = 0;

  constructor(public communicationService: CommunicationService) { }

  ngOnChanges() {
    // console.log('1 ngOnChanges', this.name);
  }

  ngOnInit(): void {
    // console.log('2 ngOnInit', this.name);
    // console.log(this.communicationService.data);
  }

  ngDoCheck(): void {
    // console.log('3 ngDoCheck', this.name, this.age);
  }

  ngAfterContentInit(): void {
    // console.log('4 ngAfterContentInit', this.name);
  }

  ngAfterContentChecked(): void {
    // console.log('5 ngAfterContentChecked', this.name);
  }

  ngAfterViewInit(): void {
    // console.log('6 ngAfterViewInit', this.name);
  }

  ngAfterViewChecked(): void {
    // console.log('7 ngAfterViewChecked', this.name);
  }

  ngOnDestroy(): void {
    // console.log('8 ngOnDestroy', this.name);
    this.updated.emit('i am destroyed');
  }

  sendDataToMain() {
    this.communicationService.sendBS(this.age);
    this.communicationService.sendS(this.age);
  }

}
