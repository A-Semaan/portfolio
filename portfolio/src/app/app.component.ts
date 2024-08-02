import { Component, HostListener, OnInit } from '@angular/core';
import { ViewType } from './types/view-type';
import { ScreenOrientationService } from './services/screen-orientation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  currentView: ViewType = 'contact'

  constructor(private screenOrientationService: ScreenOrientationService) { }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    this.screenOrientationService.setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape')
  }

  handleViewSwitched(viewType: ViewType) {
    this.currentView = viewType;
  }
}
