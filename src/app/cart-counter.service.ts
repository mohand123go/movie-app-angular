import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private cartCounter = new BehaviorSubject(0)
  currentCartCounter = this.cartCounter.asObservable();

  changeCounterValue(newCounterValue: number) {
    return this.cartCounter.next(newCounterValue)
  }

  constructor() { }
}
