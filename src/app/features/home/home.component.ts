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
import {timer} from "rxjs";

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

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

  actions = [
    {
      url: '#',
      icon: faLaptop,
      label: 'Public project'
    },
    {
      url: '#',
      icon: faMicrophone,
      label: 'Podcast'
    },
    {
      url: '#',
      icon: faGraduationCap,
      label: 'Education'
    }
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateActionButtonsSize();
  }

  constructor() {
    import('@fortawesome/free-brands-svg-icons').then(v => v.faTwitter);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateActionButtonsSize();
  }

  updateActionButtonsSize() {
    const FIRST_CHILD = 0;
    const actions = this.actionsContainer?.nativeElement?.children;
    // noinspection JSSuspiciousNameCombination
    this.actionHeight = actions?.length ? actions[FIRST_CHILD]?.clientWidth : this.actionHeight;
  }

  getDate() {
    return new Date().getFullYear();
  }
}
