import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewType } from '../../types/view-type';
import { ScreenOrientationService } from '../../services/screen-orientation.service';
import { ScreenOrientation } from '../../types/screen-orientation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output('viewSwitched') viewSwitched: EventEmitter<ViewType> = new EventEmitter<ViewType>();
  @Input('currentView') currentView: ViewType = 'home'

  screenOrientation?: ScreenOrientation;

  constructor(private screenOrientationService: ScreenOrientationService) { }

  ngOnInit(): void {
    this.screenOrientationService.orientation().subscribe((data: ScreenOrientation)=>{
      this.screenOrientation = data;
    });
  }

  selectView(viewType: ViewType) {
    this.viewSwitched.emit(viewType);
  }
}
