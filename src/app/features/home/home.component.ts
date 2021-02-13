import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faXingSquare,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

import {
  faLaptop,
  faGraduationCap,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  podcastIcon = faMicrophone;
  laptopIcon = faLaptop;
  educationIcon = faGraduationCap;

  @ViewChild('actions_container')
  actionsContainer: ElementRef;

  actionHeight = 0;

  socials = [
    {
      url: '#',
      icon: faLinkedinIn,
      label: 'LinkedIn'
    },
    {
      url: '#',
      icon: faTwitter,
      label: 'Twitter'
    },
    {
      url: '#',
      icon: faXingSquare,
      label: 'Xing'
    },
    {
      url: '#',
      icon: faStackOverflow,
      label: 'StackOverflow'
    },
    {
      url: '#',
      icon: faFacebook,
      label: 'Facebook'
    }
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateActionButtonsSize();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateActionButtonsSize()
  }

  updateActionButtonsSize() {
    const FIRST_CHILD = 0;
    const actions = this.actionsContainer.nativeElement.children;
    // noinspection JSSuspiciousNameCombination
    this.actionHeight = actions[FIRST_CHILD].clientWidth;
  }

  getDate() {
    return new Date().getFullYear();
  }
}
