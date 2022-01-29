import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-proj';
  showMe: boolean = true;
  name: string = 'Lion';

  constructor() {

  }

  hideHeader() {
    this.showMe = !this.showMe;
  }
  changeName() {
    this.name = 'Tiger';
  }
  updateReceived($event: string) {
    console.log($event);
  }
}
