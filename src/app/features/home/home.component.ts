import {Component, OnInit} from '@angular/core';

import {
  faFacebook,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faceIcon = faFacebook;
  twitterIcon = faTwitter;
  linkedinIcon = faLinkedinIn;

  constructor() {
  }

  ngOnInit(): void {
  }

}
