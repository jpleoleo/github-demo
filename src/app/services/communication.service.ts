import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  data: any = {
    name: ''
  }

  constructor() {

  }

  private behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('lional');
  sendBS(data: any) {
    this.behaviorSubject.next(data);
  }
  public receiveBS: Observable<any> = this.behaviorSubject.asObservable();

  private subject: Subject<any> = new Subject();
  sendS(data: any) {
    this.subject.next(data);
  }
  public receiveS: Observable<any> = this.subject.asObservable();

}
