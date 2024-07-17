import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScreenOrientation } from '../types/screen-orientation';

@Injectable({
  providedIn: 'root'
})
export class ScreenOrientationService {
  private state$ = new BehaviorSubject<ScreenOrientation>('');
  constructor() { }

  setOrientation(newOrientation: ScreenOrientation) {
    this.state$.next(newOrientation);
  }

  orientation(): Observable<ScreenOrientation> {
    return this.state$.asObservable();
  }

}
