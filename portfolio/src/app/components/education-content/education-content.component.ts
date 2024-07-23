import { Component } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrl: './education-content.component.css'
})
export class EducationContentComponent {
  faExternalLink = faExternalLink;
  
  
  
  openUniversityWebsite() {
    window.open("https://www.cnam-liban.fr/","_blank");
  }
}
