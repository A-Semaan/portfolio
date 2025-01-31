import { Component, HostListener, OnInit } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.css'
})
export class ContactContentComponent implements OnInit {

  faExternalLink = faExternalLink
  height: number = 0;

  ngOnInit(): void {
    this.fixUI();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fixUI();
  }

  fixUI() {
    this.height = window.innerHeight - 80 < 400 ? 400 : window.innerHeight - 80;
  }

  openCV(){
    window.open("https://drive.google.com/file/d/1t1bxcEj59mzur7hvWfn9uFpvWeVjXzke/view?usp=drive_link", "_blank");
  }
}
