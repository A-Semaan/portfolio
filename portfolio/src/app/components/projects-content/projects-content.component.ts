import { Component, HostListener, OnInit } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrl: './projects-content.component.css'
})
export class ProjectsContentComponent implements OnInit {
  faExternalLink = faExternalLink;
  height: number = 0;

  ngOnInit(): void {
    this.fixUI();
  }

  openDareToDrinkWebsite() {
    window.open("https://apkpure.com/dare-2-drink/com.sTealth.daretodrink", "_blank")
  }

  openWifiDirectWebsite() {
    window.open("https://apkpure.com/wi-fi-direct/com.sTealth.wifi_direct_share", "_blank")
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fixUI();
  }

  fixUI() {
    this.height = window.innerHeight - 80 < 400 ? 400 : window.innerHeight - 80;
  }
}
