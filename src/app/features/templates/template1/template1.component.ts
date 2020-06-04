import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {faMapMarkerAlt, faPhone, faEnvelopeOpen, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faSkype,
  faFacebook,
  faGoogle,
  faYoutube,
  faTelegram,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

import {Curriculum} from '../../../core/models';
import {endDateToShow} from '../../../shared/utils';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  addressIcon = faMapMarkerAlt;
  phoneIcon = faPhone;
  mailIcon = faEnvelopeOpen;
  languageIcon = faGlobeAmericas;

  curriculum: Curriculum;

  @ViewChild('avatarElement', {static: false})
  avatarElement: ElementRef;

  @ViewChild('avatarElement2', {static: false})
  avatarElement2: ElementRef;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe((data) => {
      this.curriculum = data.curriculum;
    });
  }

  ngOnInit() {}

  endDate(startDate: Date, endDate: Date) {
    return endDateToShow(startDate, endDate);
  }

  getMediaIcon(mediaName: string) {
    switch (mediaName) {
      case 'linkedin':
        return faLinkedinIn;
      case 'twitter':
        return faTwitter;
      case 'skype':
        return faSkype;
      case 'facebook':
        return faFacebook;
      case 'google':
        return faGoogle;
      case 'youtube':
        return faYoutube;
      case 'telegram':
        return faTelegram;
      case 'stackoverflow':
        return faStackOverflow;
      default:
        return null;
    }
  }
}
