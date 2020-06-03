import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
}
