import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {
  faFacebook,
  faGoogle,
  faLinkedinIn,
  faSkype, faStackOverflow,
  faTelegram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {Curriculum} from '../../../core/models';
import {endDateToShow} from '../../../shared/utils';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {

  curriculum: Curriculum;

  tilesCount = 10;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe((data) => {
      this.curriculum = data.curriculum;
    });
  }

  ngOnInit() {
  }

  progressTilesCount(percent): number {
    percent = percent || 0;
    return Math.round(this.tilesCount * percent / 100);
  }

  createArray(length) {
    return new Array(length);
  }

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
