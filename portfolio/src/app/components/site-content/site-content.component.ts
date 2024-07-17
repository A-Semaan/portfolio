import { Component, Input } from '@angular/core';
import { ViewType } from '../../types/view-type';

@Component({
  selector: 'app-site-content',
  templateUrl: './site-content.component.html',
  styleUrl: './site-content.component.css'
})
export class SiteContentComponent {
  @Input('currentView') currentView: ViewType = 'home'
}
