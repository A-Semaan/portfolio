import { Component, HostListener, OnInit } from '@angular/core';
import { faCaretDown, faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrl: './projects-content.component.css'
})
export class ProjectsContentComponent implements OnInit {
  faExternalLink = faExternalLink;
  faCaretDown = faCaretDown

  fulltimeExperienceExpandedIndex = -1;

  height: number = 0;

  ngOnInit(): void {
    this.fixUI();
  }

  openDareToDrinkWebsite() {
    window.open("https://apkpure.com/dare-2-drink/com.sTealth.daretodrink", "_blank")
  }

  openDareToDrinkCode() {
    window.open("https://github.com/A-Semaan/dare-2-drink-game", "_blank")
  }

  openWifiDirectWebsite() {
    window.open("https://apkpure.com/wi-fi-direct/com.sTealth.wifi_direct_share", "_blank")
  }

  openWifiDirectCode() {
    window.open("https://github.com/A-Semaan/wifi-direct-share", "_blank")
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fixUI();
  }

  fixUI() {
    this.height = window.innerHeight - 80 < 400 ? 400 : window.innerHeight - 80;
  }

  toggleFulltimeExperience(index: number) {
    this.fulltimeExperienceExpandedIndex = this.fulltimeExperienceExpandedIndex == index ? -1 : index;
  }
}
