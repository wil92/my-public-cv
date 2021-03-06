import {Component, OnInit} from '@angular/core';

import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import {ContentNames} from '../../../core/contentful/content-names';
import {ContentfulService} from '../../../core/contentful/contentful.service';

@Component({
  selector: 'cv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  i18nData: any;

  arrowRightIcon = faArrowRight;

  constructor(private contentful: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentful.select(ContentNames.MY_CV_HOME).subscribe(data => this.i18nData = data);
  }

}
